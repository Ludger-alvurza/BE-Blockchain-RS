-- CreateTable
CREATE TABLE "patients" (
    "patient_id" TEXT NOT NULL,
    "wallet_did" TEXT,
    "full_name" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3),
    "gender" TEXT,
    "blood_type" TEXT,
    "contact_phone" TEXT,
    "address" TEXT,
    "emergency_contact" JSONB,
    "insurance" JSONB,
    "allergies" JSONB,
    "chronic_conditions" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "patients_pkey" PRIMARY KEY ("patient_id")
);

-- CreateTable
CREATE TABLE "providers" (
    "provider_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "contact_phone" TEXT,
    "type" TEXT,
    "license_number" TEXT,
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "providers_pkey" PRIMARY KEY ("provider_id")
);

-- CreateTable
CREATE TABLE "doctors" (
    "doctor_id" TEXT NOT NULL,
    "provider_id" TEXT,
    "full_name" TEXT NOT NULL,
    "specialty" TEXT,
    "license_no" TEXT,
    "contact" TEXT,
    "profile_meta" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "doctors_pkey" PRIMARY KEY ("doctor_id")
);

-- CreateTable
CREATE TABLE "visits" (
    "visit_id" TEXT NOT NULL,
    "patient_id" TEXT,
    "provider_id" TEXT,
    "doctor_id" TEXT,
    "visit_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visit_type" TEXT,
    "chief_complaint" TEXT,
    "clinical_notes_hash" TEXT,
    "clinical_notes_enc" TEXT,
    "billing_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "visits_pkey" PRIMARY KEY ("visit_id")
);

-- CreateTable
CREATE TABLE "diagnoses" (
    "dx_id" TEXT NOT NULL,
    "visit_id" TEXT,
    "code_icd10" TEXT,
    "description" TEXT,
    "severity" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "diagnoses_pkey" PRIMARY KEY ("dx_id")
);

-- CreateTable
CREATE TABLE "prescriptions" (
    "presc_id" TEXT NOT NULL,
    "visit_id" TEXT,
    "medications" JSONB,
    "presc_issued_by" TEXT,
    "presc_hash" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prescriptions_pkey" PRIMARY KEY ("presc_id")
);

-- CreateTable
CREATE TABLE "labs" (
    "lab_id" TEXT NOT NULL,
    "visit_id" TEXT,
    "lab_type" TEXT,
    "results_enc" TEXT,
    "results_hash" TEXT,
    "attachments" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "labs_pkey" PRIMARY KEY ("lab_id")
);

-- CreateTable
CREATE TABLE "files" (
    "file_id" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "visit_id" TEXT,
    "file_type" TEXT,
    "storage_path" TEXT,
    "file_hash" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "files_pkey" PRIMARY KEY ("file_id")
);

-- CreateTable
CREATE TABLE "access_controls" (
    "ac_id" TEXT NOT NULL,
    "patient_id" TEXT,
    "granted_to" TEXT NOT NULL,
    "granted_by" TEXT,
    "scope" JSONB,
    "valid_from" TIMESTAMP(3),
    "valid_to" TIMESTAMP(3),
    "on_chain_tx" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "access_controls_pkey" PRIMARY KEY ("ac_id")
);

-- CreateTable
CREATE TABLE "audit_access_logs" (
    "log_id" TEXT NOT NULL,
    "patient_id" TEXT,
    "accessed_by" TEXT NOT NULL,
    "resource_type" TEXT,
    "resource_id" TEXT,
    "access_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "on_chain_anchor" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_access_logs_pkey" PRIMARY KEY ("log_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "patients_wallet_did_key" ON "patients"("wallet_did");

-- AddForeignKey
ALTER TABLE "doctors" ADD CONSTRAINT "doctors_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "providers"("provider_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visits" ADD CONSTRAINT "visits_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("patient_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visits" ADD CONSTRAINT "visits_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "providers"("provider_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visits" ADD CONSTRAINT "visits_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("doctor_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diagnoses" ADD CONSTRAINT "diagnoses_visit_id_fkey" FOREIGN KEY ("visit_id") REFERENCES "visits"("visit_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prescriptions" ADD CONSTRAINT "prescriptions_visit_id_fkey" FOREIGN KEY ("visit_id") REFERENCES "visits"("visit_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prescriptions" ADD CONSTRAINT "prescriptions_presc_issued_by_fkey" FOREIGN KEY ("presc_issued_by") REFERENCES "doctors"("doctor_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "labs" ADD CONSTRAINT "labs_visit_id_fkey" FOREIGN KEY ("visit_id") REFERENCES "visits"("visit_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_visit_id_fkey" FOREIGN KEY ("visit_id") REFERENCES "visits"("visit_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "access_controls" ADD CONSTRAINT "access_controls_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("patient_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_access_logs" ADD CONSTRAINT "audit_access_logs_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("patient_id") ON DELETE SET NULL ON UPDATE CASCADE;
