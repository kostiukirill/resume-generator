/*
  Warnings:

  - You are about to drop the column `education` on the `MyBiography` table. All the data in the column will be lost.
  - Added the required column `nameCollege` to the `MyBiography` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearStop` to the `MyBiography` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MyBiography" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "nameCity" TEXT NOT NULL,
    "birthDay" DATETIME NOT NULL,
    "nameCollege" TEXT NOT NULL,
    "yearStop" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyBiography_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyBiography" ("adminId", "birthDay", "createdAt", "nameCity", "uniqueId", "updatedAt") SELECT "adminId", "birthDay", "createdAt", "nameCity", "uniqueId", "updatedAt" FROM "MyBiography";
DROP TABLE "MyBiography";
ALTER TABLE "new_MyBiography" RENAME TO "MyBiography";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
