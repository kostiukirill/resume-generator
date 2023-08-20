/*
  Warnings:

  - You are about to drop the column `duration` on the `Courses` table. All the data in the column will be lost.
  - Added the required column `dateStart` to the `Courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateStop` to the `Courses` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Courses" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "typeCourse" TEXT NOT NULL,
    "nameCourse" TEXT NOT NULL,
    "dateStart" DATETIME NOT NULL,
    "dateStop" DATETIME NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "blogId" TEXT NOT NULL,
    CONSTRAINT "Courses_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "MyBiography" ("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Courses" ("blogId", "createdAt", "nameCourse", "typeCourse", "uniqueId", "updatedAt") SELECT "blogId", "createdAt", "nameCourse", "typeCourse", "uniqueId", "updatedAt" FROM "Courses";
DROP TABLE "Courses";
ALTER TABLE "new_Courses" RENAME TO "Courses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
