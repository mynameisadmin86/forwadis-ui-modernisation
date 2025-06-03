
import React, { useState } from 'react';
import { ErrorBoundary } from '../components/molecules/ErrorBoundary/ErrorBoundary';
import { Header } from '../components/organisms/Header/Header';
import { TripPlansTable } from '../components/organisms/TripPlansTable/TripPlansTable';
import { SearchFilterBar } from '../components/molecules/SearchFilterBar/SearchFilterBar';
import { Sidebar } from '../components/organisms/Sidebar/Sidebar';
import { useTripPlans } from '../hooks/useTripPlans';

const TripExecutionManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  
  const { tripPlans, loading, error } = useTripPlans();

  console.log('🚛 Trip Execution Management page rendered');

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background flex">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 px-6 py-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="text-blue-600">Home</span>
              <span>›</span>
              <span>Trip Execution Management</span>
            </div>

            {/* Page Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-semibold">Trip Plans</h1>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">9</span>
              </div>
            </div>

            {/* Search and Filter Bar */}
            <SearchFilterBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedFilters={selectedFilters}
              onFiltersChange={setSelectedFilters}
              showAdvancedFilters={showAdvancedFilters}
              onToggleAdvancedFilters={setShowAdvancedFilters}
              selectedRowsCount={selectedRows.length}
            />

            {/* Trip Plans Table */}
            <TripPlansTable
              tripPlans={tripPlans}
              loading={loading}
              error={error}
              selectedRows={selectedRows}
              onRowSelectionChange={setSelectedRows}
              searchQuery={searchQuery}
              filters={selectedFilters}
            />
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default TripExecutionManagement;
