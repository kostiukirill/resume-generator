/*
  Warnings:

  - The required column `uniqueId` was added to the `MyExperience` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "AboutMe_adminId_key";

-- DropIndex
DROP INDEX "Courses_blogId_key";

-- DropIndex
DROP INDEX "MyBlog_adminId_key";

-- DropIndex
DROP INDEX "MyByography_adminId_key";

-- DropIndex
DROP INDEX "MyContacts_adminId_key";

-- DropIndex
DROP INDEX "MyProject_adminId_key";

-- DropIndex
DROP INDEX "MySkills_adminId_key";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MyExperience" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "dates" TEXT NOT NULL,
    "nameCompany" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyExperience_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyExperience" ("adminId", "createdAt", "dates", "nameCompany", "position", "responsibilities", "updatedAt") SELECT "adminId", "createdAt", "dates", "nameCompany", "position", "responsibilities", "updatedAt" FROM "MyExperience";
DROP TABLE "MyExperience";
ALTER TABLE "new_MyExperience" RENAME TO "MyExperience";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
