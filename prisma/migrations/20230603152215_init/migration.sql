/*
  Warnings:

  - You are about to drop the column `date` on the `MyBlog` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MyBlog" (
    "uniqueId" TEXT NOT NULL PRIMARY KEY,
    "descr" TEXT NOT NULL,
    "mediaLink" TEXT NOT NULL,
    "createdAt" DATETIME,
    "updatedAt" DATETIME,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyBlog_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MyBlog" ("adminId", "createdAt", "descr", "mediaLink", "uniqueId", "updatedAt") SELECT "adminId", "createdAt", "descr", "mediaLink", "uniqueId", "updatedAt" FROM "MyBlog";
DROP TABLE "MyBlog";
ALTER TABLE "new_MyBlog" RENAME TO "MyBlog";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
