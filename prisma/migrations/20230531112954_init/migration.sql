/*
  Warnings:

  - You are about to drop the `Data` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `dataId` on the `MySkills` table. All the data in the column will be lost.
  - You are about to drop the column `dataId` on the `MyBlog` table. All the data in the column will be lost.
  - You are about to drop the column `dataId` on the `AboutMe` table. All the data in the column will be lost.
  - You are about to drop the column `dataId` on the `MyByography` table. All the data in the column will be lost.
  - You are about to drop the column `dataId` on the `MyProject` table. All the data in the column will be lost.
  - You are about to drop the column `dataId` on the `MyContacts` table. All the data in the column will be lost.
  - Added the required column `adminId` to the `MySkills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `MyBlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `AboutMe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `MyByography` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `MyProject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `MyContacts` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Data";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MySkills" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "typeOfSkill" TEXT NOT NULL,
    "focusOfSkill" TEXT NOT NULL,
    "nameOfSkill" TEXT NOT NULL,
    "statusLearning" BOOLEAN NOT NULL,
    "statusDone" BOOLEAN NOT NULL,
    "statusNotDone" BOOLEAN NOT NULL,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MySkills_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MySkills" ("focusOfSkill", "nameOfSkill", "statusDone", "statusLearning", "statusNotDone", "typeOfSkill", "uniqueId") SELECT "focusOfSkill", "nameOfSkill", "statusDone", "statusLearning", "statusNotDone", "typeOfSkill", "uniqueId" FROM "MySkills";
DROP TABLE "MySkills";
ALTER TABLE "new_MySkills" RENAME TO "MySkills";
CREATE UNIQUE INDEX "MySkills_adminId_key" ON "MySkills"("adminId");
CREATE TABLE "new_MyBlog" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "descr" TEXT NOT NULL,
    "mediaLink" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyBlog_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyBlog" ("date", "descr", "mediaLink", "uniqueId") SELECT "date", "descr", "mediaLink", "uniqueId" FROM "MyBlog";
DROP TABLE "MyBlog";
ALTER TABLE "new_MyBlog" RENAME TO "MyBlog";
CREATE UNIQUE INDEX "MyBlog_adminId_key" ON "MyBlog"("adminId");
CREATE TABLE "new_AboutMe" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "greeting" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "AboutMe_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AboutMe" ("description", "greeting", "job", "name", "uniqueId") SELECT "description", "greeting", "job", "name", "uniqueId" FROM "AboutMe";
DROP TABLE "AboutMe";
ALTER TABLE "new_AboutMe" RENAME TO "AboutMe";
CREATE UNIQUE INDEX "AboutMe_adminId_key" ON "AboutMe"("adminId");
CREATE TABLE "new_MyByography" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "nameCity" TEXT NOT NULL,
    "birthDay" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyByography_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyByography" ("birthDay", "education", "nameCity", "uniqueId") SELECT "birthDay", "education", "nameCity", "uniqueId" FROM "MyByography";
DROP TABLE "MyByography";
ALTER TABLE "new_MyByography" RENAME TO "MyByography";
CREATE UNIQUE INDEX "MyByography_adminId_key" ON "MyByography"("adminId");
CREATE TABLE "new_MyProject" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "projectName" TEXT NOT NULL,
    "projectLink" TEXT NOT NULL,
    "screenLink" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyProject_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyProject" ("projectLink", "projectName", "screenLink", "uniqueId") SELECT "projectLink", "projectName", "screenLink", "uniqueId" FROM "MyProject";
DROP TABLE "MyProject";
ALTER TABLE "new_MyProject" RENAME TO "MyProject";
CREATE UNIQUE INDEX "MyProject_adminId_key" ON "MyProject"("adminId");
CREATE TABLE "new_MyContacts" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "phoneLink" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telegram" TEXT NOT NULL,
    "gitHub" TEXT NOT NULL,
    "habrCareer" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyContacts_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyContacts" ("email", "gitHub", "habrCareer", "phoneLink", "telegram", "uniqueId") SELECT "email", "gitHub", "habrCareer", "phoneLink", "telegram", "uniqueId" FROM "MyContacts";
DROP TABLE "MyContacts";
ALTER TABLE "new_MyContacts" RENAME TO "MyContacts";
CREATE UNIQUE INDEX "MyContacts_adminId_key" ON "MyContacts"("adminId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
