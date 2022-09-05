/*
  Warnings:

  - Added the required column `currency` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `misure` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sku_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "misure" TEXT NOT NULL,
ADD COLUMN     "price_id" TEXT NOT NULL,
ADD COLUMN     "sku_id" TEXT NOT NULL;
