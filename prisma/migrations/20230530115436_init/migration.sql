-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Data" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "Data_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AboutMe" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "greeting" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dataId" TEXT NOT NULL,
    CONSTRAINT "AboutMe_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "Data" ("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MySkills" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "typeOfSkill" TEXT NOT NULL,
    "focusOfSkill" TEXT NOT NULL,
    "nameOfSkill" TEXT NOT NULL,
    "statusLearning" BOOLEAN NOT NULL,
    "statusDone" BOOLEAN NOT NULL,
    "statusNotDone" BOOLEAN NOT NULL,
    "dataId" TEXT NOT NULL,
    CONSTRAINT "MySkills_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "Data" ("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MyProject" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "projectName" TEXT NOT NULL,
    "projectLink" TEXT NOT NULL,
    "screenLink" TEXT NOT NULL,
    "dataId" TEXT NOT NULL,
    CONSTRAINT "MyProject_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "Data" ("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MyByography" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "nameCity" TEXT NOT NULL,
    "birthDay" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "dataId" TEXT NOT NULL,
    CONSTRAINT "MyByography_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "Data" ("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Courses" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "typeCourse" TEXT NOT NULL,
    "nameCourse" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,
    CONSTRAINT "Courses_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "MyByography" ("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MyBlog" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "descr" TEXT NOT NULL,
    "mediaLink" TEXT NOT NULL,
    "dataId" TEXT NOT NULL,
    CONSTRAINT "MyBlog_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "Data" ("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MyContacts" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "phoneLink" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telegram" TEXT NOT NULL,
    "gitHub" TEXT NOT NULL,
    "habrCareer" TEXT NOT NULL,
    "dataId" TEXT NOT NULL,
    CONSTRAINT "MyContacts_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "Data" ("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "AboutMe_dataId_key" ON "AboutMe"("dataId");

-- CreateIndex
CREATE UNIQUE INDEX "MySkills_dataId_key" ON "MySkills"("dataId");

-- CreateIndex
CREATE UNIQUE INDEX "MyProject_dataId_key" ON "MyProject"("dataId");

-- CreateIndex
CREATE UNIQUE INDEX "MyByography_dataId_key" ON "MyByography"("dataId");

-- CreateIndex
CREATE UNIQUE INDEX "Courses_blogId_key" ON "Courses"("blogId");

-- CreateIndex
CREATE UNIQUE INDEX "MyBlog_dataId_key" ON "MyBlog"("dataId");

-- CreateIndex
CREATE UNIQUE INDEX "MyContacts_dataId_key" ON "MyContacts"("dataId");
