/*
  Warnings:

  - Added the required column `linkedIn` to the `MyContacts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MyContacts" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "phoneLink" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telegram" TEXT NOT NULL,
    "gitHub" TEXT NOT NULL,
    "habrCareer" TEXT NOT NULL,
    "linkedIn" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyContacts_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyContacts" ("adminId", "createdAt", "email", "gitHub", "habrCareer", "phoneLink", "telegram", "uniqueId", "updatedAt") SELECT "adminId", "createdAt", "email", "gitHub", "habrCareer", "phoneLink", "telegram", "uniqueId", "updatedAt" FROM "MyContacts";
DROP TABLE "MyContacts";
ALTER TABLE "new_MyContacts" RENAME TO "MyContacts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
