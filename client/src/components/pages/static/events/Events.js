import React, { Component } from 'react';
import { workshopData, VIRTUAL_T_CLUB_ZOOM_URL } from './EventsConfig';

import '../static.css';
import './Events.css';
import { Table } from 'semantic-ui-react';

class Events extends Component {
    componentDidMount() {
        document.title = 'Events'
    }

    render() {
        return (
            <div className='static-page'>
                <h1>Workshops</h1>
                <h2>
                    In the Fall 2020 semester, all workshops will be held virtually.
                    You can join using the following Zoom link: <br/>
                    <a href={VIRTUAL_T_CLUB_ZOOM_URL}>Virtual T-Club</a>
                </h2>
                <Table basic='very' celled selectable padded>
                    <Table.Header className='show-header'>
                        <Table.Row>
                        <Table.HeaderCell>Choreographer</Table.HeaderCell>
                        <Table.HeaderCell>Style</Table.HeaderCell>
                        <Table.HeaderCell>Level</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Song</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {workshopData.map((workshop, i) => (
                            <Table.Row key={i}>
                                <Table.Cell>{workshop.choreographer}</Table.Cell>
                                <Table.Cell>{workshop.style}</Table.Cell>
                                <Table.Cell>{workshop.level}</Table.Cell>
                                <Table.Cell>{workshop.date}</Table.Cell>
                                <Table.Cell>{workshop.song}</Table.Cell>
                            </Table.Row>
                        ))}   
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default Events;