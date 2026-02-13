import Link from "next/link";
import { SpoolForm } from "@/components/SpoolForm";
import { createSpool } from "@/actions/spools";
import { getBrands, getMaterials, getModifiers } from "@/lib/materials";

export const dynamic = "force-dynamic";

export default function NewSpoolPage() {
  const brands = getBrands();
  const materials = getMaterials();
  const allModifiers = getModifiers();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Add New Spool
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Enter the details of your new filament spool below.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <SpoolForm
            onSubmit={createSpool}
            submitLabel="Add Spool"
            brands={brands}
            materials={materials}
            allModifiers={allModifiers}
          />
        </div>
      </div>
    </div>
  );
}
