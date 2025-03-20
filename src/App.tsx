import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Ticket, DollarSign, Music, Share2 } from 'lucide-react';

// Mock data
const monthlyRevenue = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 },
];

const ticketSales = [
  { month: 'Jan', tickets: 150 },
  { month: 'Feb', tickets: 120 },
  { month: 'Mar', tickets: 180 },
  { month: 'Apr', tickets: 160 },
  { month: 'May', tickets: 200 },
  { month: 'Jun', tickets: 190 },
];

const genreDistribution = [
  { name: 'Rock', value: 35 },
  { name: 'Pop', value: 30 },
  { name: 'Jazz', value: 15 },
  { name: 'Electronic', value: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Mock data - daily ticket sales for a rolling month
const dailyTicketSales = [
  { date: '01/05', tickets: 45 },
  { date: '02/05', tickets: 38 },
  { date: '03/05', tickets: 52 },
  { date: '04/05', tickets: 30 },
  { date: '05/05', tickets: 65 },
  { date: '06/05', tickets: 48 },
  { date: '07/05', tickets: 42 },
  { date: '08/05', tickets: 39 },
  { date: '09/05', tickets: 55 },
  { date: '10/05', tickets: 60 },
  { date: '11/05', tickets: 44 },
  { date: '12/05', tickets: 37 },
  { date: '13/05', tickets: 51 },
  { date: '14/05', tickets: 58 },
  { date: '15/05', tickets: 49 },
  { date: '16/05', tickets: 63 },
  { date: '17/05', tickets: 45 },
  { date: '18/05', tickets: 41 },
  { date: '19/05', tickets: 38 },
  { date: '20/05', tickets: 52 },
  { date: '21/05', tickets: 57 },
  { date: '22/05', tickets: 46 },
  { date: '23/05', tickets: 59 },
  { date: '24/05', tickets: 43 },
  { date: '25/05', tickets: 55 },
  { date: '26/05', tickets: 51 },
  { date: '27/05', tickets: 47 },
  { date: '28/05', tickets: 54 },
  { date: '29/05', tickets: 62 },
  { date: '30/05', tickets: 50 },
];

// Mock data - daily ticket value sales for a rolling month
const dailyTicketValue = [
  { date: '01/05', value: 2250 },
  { date: '02/05', value: 1900 },
  { date: '03/05', value: 2600 },
  { date: '04/05', value: 1500 },
  { date: '05/05', value: 3250 },
  { date: '06/05', value: 2400 },
  { date: '07/05', value: 2100 },
  { date: '08/05', value: 1950 },
  { date: '09/05', value: 2750 },
  { date: '10/05', value: 3000 },
  { date: '11/05', value: 2200 },
  { date: '12/05', value: 1850 },
  { date: '13/05', value: 2550 },
  { date: '14/05', value: 2900 },
  { date: '15/05', value: 2450 },
  { date: '16/05', value: 3150 },
  { date: '17/05', value: 2250 },
  { date: '18/05', value: 2050 },
  { date: '19/05', value: 1900 },
  { date: '20/05', value: 2600 },
  { date: '21/05', value: 2850 },
  { date: '22/05', value: 2300 },
  { date: '23/05', value: 2950 },
  { date: '24/05', value: 2150 },
  { date: '25/05', value: 2750 },
  { date: '26/05', value: 2550 },
  { date: '27/05', value: 2350 },
  { date: '28/05', value: 2700 },
  { date: '29/05', value: 3100 },
  { date: '30/05', value: 2500 },
];

// Mock data - utilization rates for concerts
const concerts = [
  {
    name: 'Rock Festival 2024',
    utilizationData: [
      { name: 'Unsold tickets', value: 20 },
      { name: 'Sold but unused tickets', value: 15 },
      { name: 'Used tickets', value: 65 }
    ]
  },
  {
    name: 'Jazz Night',
    utilizationData: [
      { name: 'Unsold tickets', value: 10 },
      { name: 'Sold but unused tickets', value: 5 },
      { name: 'Used tickets', value: 85 }
    ]
  },
  {
    name: 'Pop Concert',
    utilizationData: [
      { name: 'Unsold tickets', value: 15 },
      { name: 'Sold but unused tickets', value: 25 },
      { name: 'Used tickets', value: 60 }
    ]
  },
  {
    name: 'Electronic Music Fest',
    utilizationData: [
      { name: 'Unsold tickets', value: 5 },
      { name: 'Sold but unused tickets', value: 10 },
      { name: 'Used tickets', value: 85 }
    ]
  }
];

const UTILIZATION_COLORS = ['#E0E0E0', '#FFC107', '#4CAF50'];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 font-['Fugaz_One']">Concert Management Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Concerts</p>
              <p className="text-2xl font-bold">156</p>
            </div>
            <Music className="text-green-500" size={24} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Tickets Sold</p>
              <p className="text-2xl font-bold">1,289</p>
            </div>
            <Ticket className="text-yellow-500" size={24} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold">€45,289</p>
            </div>
            <DollarSign className="text-purple-500" size={24} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Transferred Tickets Rate</p>
              <p className="text-2xl font-bold">18.5%</p>
            </div>
            <Share2 className="text-blue-500" size={24} />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">IND 1: Tickets Sold Per Day (Rolling Month)</h2>
          <BarChart width={500} height={300} data={dailyTicketSales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="tickets" fill="#8884d8" name="Number of tickets" />
          </BarChart>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">IND 2: Ticket Value Per Day (Rolling Month)</h2>
          <LineChart width={500} height={300} data={dailyTicketValue}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip formatter={(value) => [`€${value}`, 'Value']} />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#82ca9d" name="Value in euros" />
          </LineChart>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md overflow-y-auto" style={{ maxHeight: '550px' }}>
          <h2 className="text-xl font-bold mb-4">IND 3: Utilization Rate Per Concert</h2>
          <div className="space-y-8">
            {concerts.map((concert, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-semibold text-lg mb-2">{concert.name}</h3>
                <div className="flex justify-center">
                  <PieChart width={280} height={200}>
                    <Pie
                      data={concert.utilizationData}
                      cx={140}
                      cy={100}
                      innerRadius={40}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {concert.utilizationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={UTILIZATION_COLORS[index % UTILIZATION_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Monthly Revenue</h2>
          <BarChart width={500} height={300} data={monthlyRevenue}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => [`€${value}`, 'Revenue']} />
            <Legend />
            <Bar dataKey="revenue" fill="#82ca9d" name="Revenue in euros" />
          </BarChart>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Recent Events</h2>
          <div className="space-y-4">
            {[
              { name: 'Rock Festival 2024', date: '2024-05-15', tickets: 450, revenue: '€22,500', utilization: '85%' },
              { name: 'Jazz Night', date: '2024-05-20', tickets: 200, revenue: '€8,000', utilization: '90%' },
              { name: 'Pop Concert', date: '2024-05-25', tickets: 350, revenue: '€17,500', utilization: '75%' },
              { name: 'Electronic Music Fest', date: '2024-05-30', tickets: 600, revenue: '€30,000', utilization: '95%' },
            ].map((event, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">{event.name}</p>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{event.revenue}</p>
                  <p className="text-sm text-gray-500">{event.tickets} tickets</p>
                  <p className="text-sm text-green-600">Utilization: {event.utilization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;