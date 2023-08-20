-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MyBiography" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "nameCity" TEXT NOT NULL,
    "birthDay" DATETIME NOT NULL,
    "nameCollege" TEXT NOT NULL,
    "yearStop" TEXT,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyBiography_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyBiography" ("adminId", "birthDay", "createdAt", "nameCity", "nameCollege", "uniqueId", "updatedAt", "yearStop") SELECT "adminId", "birthDay", "createdAt", "nameCity", "nameCollege", "uniqueId", "updatedAt", "yearStop" FROM "MyBiography";
DROP TABLE "MyBiography";
ALTER TABLE "new_MyBiography" RENAME TO "MyBiography";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
