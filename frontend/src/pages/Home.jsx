import { useQuery } from 'react-query';
import api from '../utils/api';
import './Home.css';

const Home = () => {
  const { data: healthData, isLoading, error } = useQuery(
    'health',
    async () => {
      const response = await api.get('/health');
      return response.data;
    },
    {
      refetchInterval: 30000, // Refetch every 30 seconds
    }
  );

  if (isLoading) return <div>Loading health status...</div>;
  if (error) return <div>Error loading health status</div>;

  return (
    <div className="home">
      <h1>Welcome to MERN Stack Application</h1>
      <div className="health-status">
        <h2>System Status</h2>
        <div className="status-card">
          <p><strong>Status:</strong> {healthData?.status}</p>
          <p><strong>Environment:</strong> {healthData?.environment}</p>
          <p><strong>Database:</strong> {healthData?.database}</p>
          <p><strong>Uptime:</strong> {Math.floor(healthData?.uptime || 0)}s</p>
          <p><strong>Memory Used:</strong> {healthData?.memory?.used} MB</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

