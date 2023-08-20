-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MyProject" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "projectName" TEXT NOT NULL,
    "projectLink" TEXT NOT NULL,
    "screenLink" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyProject_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyProject" ("adminId", "createdAt", "projectLink", "projectName", "screenLink", "uniqueId", "updatedAt") SELECT "adminId", "createdAt", "projectLink", "projectName", "screenLink", "uniqueId", "updatedAt" FROM "MyProject";
DROP TABLE "MyProject";
ALTER TABLE "new_MyProject" RENAME TO "MyProject";
CREATE UNIQUE INDEX "MyProject_adminId_key" ON "MyProject"("adminId");
CREATE TABLE "new_MyByography" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "nameCity" TEXT NOT NULL,
    "birthDay" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyByography_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyByography" ("adminId", "birthDay", "createdAt", "education", "nameCity", "uniqueId", "updatedAt") SELECT "adminId", "birthDay", "createdAt", "education", "nameCity", "uniqueId", "updatedAt" FROM "MyByography";
DROP TABLE "MyByography";
ALTER TABLE "new_MyByography" RENAME TO "MyByography";
CREATE UNIQUE INDEX "MyByography_adminId_key" ON "MyByography"("adminId");
CREATE TABLE "new_MyBlog" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "descr" TEXT NOT NULL,
    "mediaLink" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyBlog_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyBlog" ("adminId", "createdAt", "date", "descr", "mediaLink", "uniqueId", "updatedAt") SELECT "adminId", "createdAt", "date", "descr", "mediaLink", "uniqueId", "updatedAt" FROM "MyBlog";
DROP TABLE "MyBlog";
ALTER TABLE "new_MyBlog" RENAME TO "MyBlog";
CREATE UNIQUE INDEX "MyBlog_adminId_key" ON "MyBlog"("adminId");
CREATE TABLE "new_MyExperience" (
    "dates" TEXT NOT NULL,
    "nameCompany" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyExperience_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyExperience" ("adminId", "createdAt", "dates", "nameCompany", "position", "responsibilities", "updatedAt") SELECT "adminId", "createdAt", "dates", "nameCompany", "position", "responsibilities", "updatedAt" FROM "MyExperience";
DROP TABLE "MyExperience";
ALTER TABLE "new_MyExperience" RENAME TO "MyExperience";
CREATE UNIQUE INDEX "MyExperience_adminId_key" ON "MyExperience"("adminId");
CREATE TABLE "new_MyContacts" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "phoneLink" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telegram" TEXT NOT NULL,
    "gitHub" TEXT NOT NULL,
    "habrCareer" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyContacts_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyContacts" ("adminId", "createdAt", "email", "gitHub", "habrCareer", "phoneLink", "telegram", "uniqueId", "updatedAt") SELECT "adminId", "createdAt", "email", "gitHub", "habrCareer", "phoneLink", "telegram", "uniqueId", "updatedAt" FROM "MyContacts";
DROP TABLE "MyContacts";
ALTER TABLE "new_MyContacts" RENAME TO "MyContacts";
CREATE UNIQUE INDEX "MyContacts_adminId_key" ON "MyContacts"("adminId");
CREATE TABLE "new_AboutMe" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "greeting" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "AboutMe_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AboutMe" ("adminId", "createdAt", "description", "greeting", "job", "name", "photo", "uniqueId", "updatedAt") SELECT "adminId", "createdAt", "description", "greeting", "job", "name", "photo", "uniqueId", "updatedAt" FROM "AboutMe";
DROP TABLE "AboutMe";
ALTER TABLE "new_AboutMe" RENAME TO "AboutMe";
CREATE UNIQUE INDEX "AboutMe_adminId_key" ON "AboutMe"("adminId");
CREATE TABLE "new_MySkills" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "typeOfSkill" TEXT NOT NULL,
    "focusOfSkill" TEXT NOT NULL,
    "nameOfSkill" TEXT NOT NULL,
    "statusLearning" BOOLEAN NOT NULL,
    "statusDone" BOOLEAN NOT NULL,
    "statusNotDone" BOOLEAN NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MySkills_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MySkills" ("adminId", "createdAt", "focusOfSkill", "nameOfSkill", "statusDone", "statusLearning", "statusNotDone", "typeOfSkill", "uniqueId", "updatedAt") SELECT "adminId", "createdAt", "focusOfSkill", "nameOfSkill", "statusDone", "statusLearning", "statusNotDone", "typeOfSkill", "uniqueId", "updatedAt" FROM "MySkills";
DROP TABLE "MySkills";
ALTER TABLE "new_MySkills" RENAME TO "MySkills";
CREATE UNIQUE INDEX "MySkills_adminId_key" ON "MySkills"("adminId");
CREATE TABLE "new_Courses" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "typeCourse" TEXT NOT NULL,
    "nameCourse" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "blogId" TEXT NOT NULL,
    CONSTRAINT "Courses_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "MyByography" ("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Courses" ("blogId", "createdAt", "duration", "nameCourse", "typeCourse", "uniqueId", "updatedAt") SELECT "blogId", "createdAt", "duration", "nameCourse", "typeCourse", "uniqueId", "updatedAt" FROM "Courses";
DROP TABLE "Courses";
ALTER TABLE "new_Courses" RENAME TO "Courses";
CREATE UNIQUE INDEX "Courses_blogId_key" ON "Courses"("blogId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
