/*
  Warnings:

  - Added the required column `photo` to the `AboutMe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AboutMe" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "greeting" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "AboutMe_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AboutMe" ("adminId", "description", "greeting", "job", "name", "uniqueId") SELECT "adminId", "description", "greeting", "job", "name", "uniqueId" FROM "AboutMe";
DROP TABLE "AboutMe";
ALTER TABLE "new_AboutMe" RENAME TO "AboutMe";
CREATE UNIQUE INDEX "AboutMe_adminId_key" ON "AboutMe"("adminId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
