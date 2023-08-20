-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MyExperience" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "dateStart" TEXT NOT NULL,
    "dateStop" TEXT NOT NULL,
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
