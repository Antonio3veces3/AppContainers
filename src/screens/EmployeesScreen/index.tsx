/* eslint-disable prettier/prettier */
import React from 'react';
import {Employees} from '../../data/DataEmployees';
import EmployeesComponent from '../../components/EmployeesComponent';
import { ScrollView } from 'react-native';

const Component = () => {

    const getEmployees = Employees?.map((Employee, index) => {
        return (
            <EmployeesComponent
                key={`Employees-${index}`}
                name={Employee.name}
                ocuppation={Employee.Ocuppation}
                tel={Employee.tel}
                photo={Employee.photo}
            />
        );
    });

    return (
        <ScrollView>
            {getEmployees}
        </ScrollView>
    );
};

export default Component;


