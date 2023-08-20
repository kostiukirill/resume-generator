/*
  Warnings:

  - You are about to alter the column `dateStart` on the `MyExperience` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `dateStop` on the `MyExperience` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MyExperience" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "dateStart" DATETIME NOT NULL,
    "dateStop" DATETIME NOT NULL,
    "nameCompany" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyExperience_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyExperience" ("adminId", "createdAt", "dateStart", "dateStop", "nameCompany", "position", "responsibilities", "uniqueId", "updatedAt") SELECT "adminId", "createdAt", "dateStart", "dateStop", "nameCompany", "position", "responsibilities", "uniqueId", "updatedAt" FROM "MyExperience";
DROP TABLE "MyExperience";
ALTER TABLE "new_MyExperience" RENAME TO "MyExperience";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
