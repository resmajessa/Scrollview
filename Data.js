import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ApiComp = () => {
    const [error, setError] = useState(null);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            setDatas(result.data);
            setError(null);
        }   catch (error) {
            console.error('Error fetching data:', error);
            setError('Could not fetch data. Please try again.');
        }
    };

    return (
        <ScrollView style={StyleSheet.container}>
            <Text style={styles.header}>List of Employees</Text>
            {error ? (
                <Text style={styles.error}>{error}</Text>
            ) : (
                datas.map((item) => (
                    <View key={item.id}>
                        <Text style={styles.name}>{item.employee_name}</Text>
                        <Text style={styles.salary}>{'Salary: $' + item.employee_salary}</Text>
                    </View>
                ))
            )}
        </ScrollView>
    );
};

export function Data() {
    return (
        <View>
            <ApiComp />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20,
        marginRight: 120,
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
    name: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 15,
    },
    salary: {
        fontSize: 12,
        marginBottom: 20,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 5,
        textAlign: 'center',
        alignItems: 'center',
    },
});
