/*
  Warnings:

  - You are about to drop the column `bioId` on the `Courses` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Courses" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "nameSchool" TEXT NOT NULL,
    "profession" TEXT,
    "stack" TEXT,
    "start" DATETIME NOT NULL,
    "stop" DATETIME NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME
);
INSERT INTO "new_Courses" ("createdAt", "nameSchool", "profession", "stack", "start", "stop", "uniqueId", "updatedAt") SELECT "createdAt", "nameSchool", "profession", "stack", "start", "stop", "uniqueId", "updatedAt" FROM "Courses";
DROP TABLE "Courses";
ALTER TABLE "new_Courses" RENAME TO "Courses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
