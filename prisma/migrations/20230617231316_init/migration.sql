/*
  Warnings:

  - You are about to drop the column `email` on the `MyContacts` table. All the data in the column will be lost.
  - You are about to drop the column `gitHub` on the `MyContacts` table. All the data in the column will be lost.
  - You are about to drop the column `habrCareer` on the `MyContacts` table. All the data in the column will be lost.
  - You are about to drop the column `linkedIn` on the `MyContacts` table. All the data in the column will be lost.
  - You are about to drop the column `phoneLink` on the `MyContacts` table. All the data in the column will be lost.
  - You are about to drop the column `telegram` on the `MyContacts` table. All the data in the column will be lost.
  - Added the required column `linkContact` to the `MyContacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameContact` to the `MyContacts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MyContacts" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "nameContact" TEXT NOT NULL,
    "linkContact" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyContacts_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyContacts" ("adminId", "createdAt", "uniqueId", "updatedAt") SELECT "adminId", "createdAt", "uniqueId", "updatedAt" FROM "MyContacts";
DROP TABLE "MyContacts";
ALTER TABLE "new_MyContacts" RENAME TO "MyContacts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
