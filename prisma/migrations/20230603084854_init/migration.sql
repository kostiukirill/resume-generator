/*
  Warnings:

  - You are about to drop the `MyByography` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MyByography";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "MyBiography" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "nameCity" TEXT NOT NULL,
    "birthDay" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyBiography_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Courses" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "typeCourse" TEXT NOT NULL,
    "nameCourse" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "blogId" TEXT NOT NULL,
    CONSTRAINT "Courses_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "MyBiography" ("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Courses" ("blogId", "createdAt", "duration", "nameCourse", "typeCourse", "uniqueId", "updatedAt") SELECT "blogId", "createdAt", "duration", "nameCourse", "typeCourse", "uniqueId", "updatedAt" FROM "Courses";
DROP TABLE "Courses";
ALTER TABLE "new_Courses" RENAME TO "Courses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
