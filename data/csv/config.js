module.exports = {
	files: {
		trips: [
			'./data/csv/Divvy_Trips_2014-Q1Q2a.csv',
			'./data/csv/Divvy_Trips_2014-Q1Q2a_2.csv',
			'./data/csv/Divvy_Trips_2014-Q1Q2b.csv',
			'./data/csv/Divvy_Trips_2014-Q1Q2b_2.csv',
			'./data/csv/Divvy_Trips_2014-Q1Q2c.csv',
			'./data/csv/Divvy_Trips_2014-Q1Q2c_2.csv',
			'./data/csv/Divvy_Trips_2014-Q1Q2d.csv',
			'./data/csv/Divvy_Trips_2014-Q1Q2d_2.csv',
			'./data/csv/Divvy_Trips_2014-Q3a.csv',
			'./data/csv/Divvy_Trips_2014-Q3a_2.csv',
			'./data/csv/Divvy_Trips_2014-Q3b.csv',
			'./data/csv/Divvy_Trips_2014-Q3b_2.csv',
			'./data/csv/Divvy_Trips_2014-Q3c.csv',
			'./data/csv/Divvy_Trips_2014-Q3c_2.csv',
			'./data/csv/Divvy_Trips_2014-Q3d.csv',
			'./data/csv/Divvy_Trips_2014-Q4a.csv',
			'./data/csv/Divvy_Trips_2014-Q4b.csv'
		],
		stations: [
			'./data/csv/Divvy_Stations_2014-Q1Q2.csv',
			'./data/csv/Divvy_Stations_2014-Q3Q4.csv'
		]
	},
	options: {
		stations: {
			headers: true
		},
		trips: {
			headers: true
		}
	}
}