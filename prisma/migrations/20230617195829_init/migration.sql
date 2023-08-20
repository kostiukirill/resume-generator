-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Courses" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "nameSchool" TEXT NOT NULL,
    "profession" TEXT,
    "stack" TEXT,
    "start" DATETIME NOT NULL,
    "stop" DATETIME,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "Courses_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Courses" ("adminId", "createdAt", "nameSchool", "profession", "stack", "start", "stop", "uniqueId", "updatedAt") SELECT "adminId", "createdAt", "nameSchool", "profession", "stack", "start", "stop", "uniqueId", "updatedAt" FROM "Courses";
DROP TABLE "Courses";
ALTER TABLE "new_Courses" RENAME TO "Courses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
