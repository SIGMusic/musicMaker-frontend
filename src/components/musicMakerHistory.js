import React from 'react';
import { Feed } from 'semantic-ui-react';

const events = []

function chordEventMaker(chord, chordNotes) {
    events.push({summary: chord, extraText: chordNotes});
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

const MusicMakerHistory = () => <Feed events={events} />

export default MusicMakerHistory;