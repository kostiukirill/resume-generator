-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MyContacts" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "phoneLink" TEXT,
    "email" TEXT,
    "telegram" TEXT,
    "gitHub" TEXT,
    "habrCareer" TEXT,
    "linkedIn" TEXT,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyContacts_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyContacts" ("adminId", "createdAt", "email", "gitHub", "habrCareer", "linkedIn", "phoneLink", "telegram", "uniqueId", "updatedAt") SELECT "adminId", "createdAt", "email", "gitHub", "habrCareer", "linkedIn", "phoneLink", "telegram", "uniqueId", "updatedAt" FROM "MyContacts";
DROP TABLE "MyContacts";
ALTER TABLE "new_MyContacts" RENAME TO "MyContacts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
