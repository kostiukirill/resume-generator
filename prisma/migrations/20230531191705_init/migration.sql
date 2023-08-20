-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MyExperience" (
    "dates" TEXT NOT NULL,
    "nameCompany" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME NOT NULL,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyExperience_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyExperience" ("adminId", "createdAt", "dates", "nameCompany", "position", "responsibilities", "updatedAt") SELECT "adminId", "createdAt", "dates", "nameCompany", "position", "responsibilities", "updatedAt" FROM "MyExperience";
DROP TABLE "MyExperience";
ALTER TABLE "new_MyExperience" RENAME TO "MyExperience";
CREATE UNIQUE INDEX "MyExperience_adminId_key" ON "MyExperience"("adminId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
