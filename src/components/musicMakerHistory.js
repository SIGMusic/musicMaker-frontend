import React from 'react';
import { Feed } from 'semantic-ui-react';


class MusicMakerHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {events = []};
    }

    render() {
        return (
            <Feed events={this.state.events} />
        );
    }
}

function chordEventMaker(chord, chordNotes) {
    this.state.events.push({summary: chord, extraText: chordNotes});
}

/*
function chordNotes(chord) {
    var colonIndex = chord.indexOf(":");
    var rootNote = chord.subString(0, colonIndex);
}

function chordScaleDegree(root, degree) {
    return root;
}
*/

export default MusicMakerHistory;