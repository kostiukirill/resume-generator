-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MySkills" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "typeOfSkill" TEXT NOT NULL,
    "focusOfSkill" TEXT NOT NULL,
    "nameOfSkill" TEXT NOT NULL,
    "statusLearning" BOOLEAN NOT NULL DEFAULT false,
    "statusDone" BOOLEAN NOT NULL DEFAULT false,
    "statusNotDone" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MySkills_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MySkills" ("adminId", "createdAt", "focusOfSkill", "nameOfSkill", "statusDone", "statusLearning", "statusNotDone", "typeOfSkill", "uniqueId", "updatedAt") SELECT "adminId", "createdAt", "focusOfSkill", "nameOfSkill", "statusDone", "statusLearning", "statusNotDone", "typeOfSkill", "uniqueId", "updatedAt" FROM "MySkills";
DROP TABLE "MySkills";
ALTER TABLE "new_MySkills" RENAME TO "MySkills";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
