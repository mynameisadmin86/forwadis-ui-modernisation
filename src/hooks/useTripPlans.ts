
import { useState, useEffect } from 'react';

interface TripPlan {
  id: string;
  tripPlanNo: string;
  status: string;
  tripBillingStatus: string;
  plannedStartDateTime: string;
  plannedEndDateTime: string;
  actualStartDateTime: string;
  actualEndDateTime: string;
  departurePoint: string;
  arrivalPoint: string;
  customer: string;
  resources: string;
}

export const useTripPlans = () => {
  const [tripPlans, setTripPlans] = useState<TripPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call with mock data
    const fetchTripPlans = async () => {
      try {
        setLoading(true);
        
        // Mock data based on the screenshots
        const mockTripPlans: TripPlan[] = [
          {
            id: '1',
            tripPlanNo: 'TRIP00000001',
            status: 'Released',
            tripBillingStatus: 'Draft Bill Raised',
            plannedStartDateTime: '25-Mar-2025 11:22:34 PM',
            plannedEndDateTime: '27-Mar-2025 11:22:34 PM',
            actualStartDateTime: '25-Mar-2025 11:22:34 PM',
            actualEndDateTime: '27-Mar-2025 11:22:34 PM',
            departurePoint: 'VLA-70',
            arrivalPoint: 'CUR-25',
            customer: '+3',
            resources: '+3',
          },
          {
            id: '2',
            tripPlanNo: 'TRIP00000002',
            status: 'Under Execution',
            tripBillingStatus: 'Not Eligible',
            plannedStartDateTime: '25-Mar-2025 11:22:34 PM',
            plannedEndDateTime: '27-Mar-2025 11:22:34 PM',
            actualStartDateTime: '25-Mar-2025 11:22:34 PM',
            actualEndDateTime: '27-Mar-2025 11:22:34 PM',
            departurePoint: 'VLA-70',
            arrivalPoint: 'CUR-25',
            customer: '+3',
            resources: '+3',
          },
          {
            id: '3',
            tripPlanNo: 'TRIP00000003',
            status: 'Initiated',
            tripBillingStatus: 'Revenue Leakage',
            plannedStartDateTime: '25-Mar-2025 11:22:34 PM',
            plannedEndDateTime: '27-Mar-2025 11:22:34 PM',
            actualStartDateTime: '25-Mar-2025 11:22:34 PM',
            actualEndDateTime: '27-Mar-2025 11:22:34 PM',
            departurePoint: 'VLA-70',
            arrivalPoint: 'CUR-25',
            customer: '+3',
            resources: '+3',
          },
          {
            id: '4',
            tripPlanNo: 'TRIP00000004',
            status: 'Cancelled',
            tripBillingStatus: 'Invoice Created',
            plannedStartDateTime: '25-Mar-2025 11:22:34 PM',
            plannedEndDateTime: '27-Mar-2025 11:22:34 PM',
            actualStartDateTime: '25-Mar-2025 11:22:34 PM',
            actualEndDateTime: '27-Mar-2025 11:22:34 PM',
            departurePoint: 'VLA-70',
            arrivalPoint: 'CUR-25',
            customer: '+3',
            resources: '+3',
          },
          {
            id: '5',
            tripPlanNo: 'TRIP00000005',
            status: 'Deleted',
            tripBillingStatus: 'Invoice Approved',
            plannedStartDateTime: '25-Mar-2025 11:22:34 PM',
            plannedEndDateTime: '27-Mar-2025 11:22:34 PM',
            actualStartDateTime: '25-Mar-2025 11:22:34 PM',
            actualEndDateTime: '27-Mar-2025 11:22:34 PM',
            departurePoint: 'VLA-70',
            arrivalPoint: 'CUR-25',
            customer: '+3',
            resources: '+3',
          },
          {
            id: '6',
            tripPlanNo: 'TRIP00000006',
            status: 'Confirmed',
            tripBillingStatus: 'Not Eligible',
            plannedStartDateTime: '25-Mar-2025 11:22:34 PM',
            plannedEndDateTime: '27-Mar-2025 11:22:34 PM',
            actualStartDateTime: '25-Mar-2025 11:22:34 PM',
            actualEndDateTime: '27-Mar-2025 11:22:34 PM',
            departurePoint: 'VLA-70',
            arrivalPoint: 'CUR-25',
            customer: '+3',
            resources: '+3',
          },
          {
            id: '7',
            tripPlanNo: 'TRIP00000007',
            status: 'Under Execution',
            tripBillingStatus: 'Revenue Leakage',
            plannedStartDateTime: '25-Mar-2025 11:22:34 PM',
            plannedEndDateTime: '27-Mar-2025 11:22:34 PM',
            actualStartDateTime: '25-Mar-2025 11:22:34 PM',
            actualEndDateTime: '27-Mar-2025 11:22:34 PM',
            departurePoint: 'VLA-70',
            arrivalPoint: 'CUR-25',
            customer: '+3',
            resources: '+3',
          },
        ];

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setTripPlans(mockTripPlans);
        console.log('🚛 Trip plans loaded:', mockTripPlans.length);
      } catch (err) {
        setError('Failed to load trip plans');
        console.error('❌ Error loading trip plans:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTripPlans();
  }, []);

  return { tripPlans, loading, error };
};
