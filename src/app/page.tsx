import Link from "next/link";
import { getSpools } from "@/actions/spools";
import { SpoolList } from "@/components/SpoolList";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const result = await getSpools();

  if (!result.success) {
    return (
      <div className="min-h-screen px-4 py-8 max-w-6xl mx-auto">
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800 border border-red-200">
          Error loading spools: {result.error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Filament Manager</h1>
            <p className="text-sm text-gray-500 mt-1">
              {result.spools.length} spool{result.spools.length !== 1 ? "s" : ""} in inventory
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/settings"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              title="Settings"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
            <Link
              href="/spools/new"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              + Add Spool
            </Link>
          </div>
        </div>

        {/* Spool List */}
        <SpoolList spools={result.spools} />
      </div>
    </div>
  );
}
