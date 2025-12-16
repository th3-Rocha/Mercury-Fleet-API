-- CreateEnum
CREATE TYPE "BalanceEventType" AS ENUM ('VEHICLE_MAINTENANCE', 'FUEL', 'FOOD', 'TOLL', 'INSURANCE', 'TAX', 'SALARY', 'MARKETING', 'SOFTWARE', 'UTILITIES', 'OTHER_EXPENSE', 'FREIGHT_INCOME', 'ASSET_SALE', 'OTHER_INCOME');

-- CreateTable
CREATE TABLE "balance_events" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "description" TEXT NOT NULL,
    "type" "BalanceEventType" NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "balance_events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "balance_events_companyId_idx" ON "balance_events"("companyId");

-- CreateIndex
CREATE INDEX "balance_events_type_idx" ON "balance_events"("type");

-- CreateIndex
CREATE INDEX "balance_events_occurredAt_idx" ON "balance_events"("occurredAt");

-- AddForeignKey
ALTER TABLE "balance_events" ADD CONSTRAINT "balance_events_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
