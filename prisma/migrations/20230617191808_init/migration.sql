/*
  Warnings:

  - You are about to drop the column `blogId` on the `Courses` table. All the data in the column will be lost.
  - You are about to drop the column `dateStart` on the `Courses` table. All the data in the column will be lost.
  - You are about to drop the column `dateStop` on the `Courses` table. All the data in the column will be lost.
  - You are about to drop the column `nameCourse` on the `Courses` table. All the data in the column will be lost.
  - You are about to drop the column `typeCourse` on the `Courses` table. All the data in the column will be lost.
  - Added the required column `bioId` to the `Courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameSchool` to the `Courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `Courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stop` to the `Courses` table without a default value. This is not possible if the table is not empty.

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
    "updatedAt" DATETIME,
    "bioId" TEXT NOT NULL,
    CONSTRAINT "Courses_bioId_fkey" FOREIGN KEY ("bioId") REFERENCES "MyBiography" ("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Courses" ("createdAt", "uniqueId", "updatedAt") SELECT "createdAt", "uniqueId", "updatedAt" FROM "Courses";
DROP TABLE "Courses";
ALTER TABLE "new_Courses" RENAME TO "Courses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
