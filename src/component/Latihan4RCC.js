import React, { Component } from 'react';
import { Text, View } from 'react-native'

class Latihan4RCC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identity: {
                npm: 21231222,
                firstName: 'Soltina',
                middleName: 'Zenobia',
                lastName: '-'
            },
            educations: [
                { id: 1, school: 'SDN kedung badak 4' },
                { id: 2, school: 'MTS Darunnajah' },
                { id: 3, school: 'SMA Regina Pacis' }],
            mobile_phone: '088214013255',
            email: '21231222@student.ibik.ac.id',
            gender: 'N',
            tall_body: 169,
            weight_body: 68
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderWidth: 1, padding: 10, width: 300 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Latihan4RCC</Text>
                    <Text style={{ fontWeight: 'bold' }}>Identity</Text>
                    <Text>NPM : {this.state.identity.npm}</Text>
                    <Text>First Name : {this.state.identity.firstName}</Text>
                    <Text>Middle Name : {this.state.identity.middleName}</Text>
                    <Text>Last Name : {this.state.identity.lastName}</Text>
                    <Text style={{ fontWeight: 'bold' }}>Educations</Text>
                    {this.state.educations.map((education) => {
                        return (
                            <Text>{education.id}. {education.school}</Text>
                        )
                    })}
                    <Text>Mobile Phone : {this.state.mobile_phone}</Text>
                    <Text>Email : {this.state.email}</Text>
                    <Text>Gender : {this.state.gender}</Text>
                    <Text>Tall Body : {this.state.tall_body}</Text>
                    <Text>Weight Body : {this.state.weight_body}</Text>
                </View>
            </View>
        )
    }
}
export default Latihan4RCC;
