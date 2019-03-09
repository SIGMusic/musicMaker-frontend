import React from 'react';
import { Card } from 'semantic-ui-react';

class SuggestedChords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chords = []};
        this.chordCardMaker = this.chordCardMaker.bind(this);
    }
    
    chordCardMaker(chord, chordNotes, percentage) {
        this.setState(
            this.state.chords.push({header: chord, description: chordNotes, meta: percentage + "%"})
        );
    }

    render() {
        return (
            <Card.Group items = {this.state.chords}/>
        );
    }
}

export default SuggestedChords;