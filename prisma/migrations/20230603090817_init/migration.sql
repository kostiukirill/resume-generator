/*
  Warnings:

  - You are about to alter the column `birthDay` on the `MyBiography` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MyBiography" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "nameCity" TEXT NOT NULL,
    "birthDay" DATETIME NOT NULL,
    "education" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyBiography_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyBiography" ("adminId", "birthDay", "createdAt", "education", "nameCity", "uniqueId", "updatedAt") SELECT "adminId", "birthDay", "createdAt", "education", "nameCity", "uniqueId", "updatedAt" FROM "MyBiography";
DROP TABLE "MyBiography";
ALTER TABLE "new_MyBiography" RENAME TO "MyBiography";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
