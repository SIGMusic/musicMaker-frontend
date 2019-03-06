import React from 'react';
import { Feed } from 'semantic-ui-react';

const events = []

function chordEventMaker(chord) {
    const image = chordImage(chord);
    const notes = chordNotes(chord);

    events.push({image: image, extraText: notes})
}

function chordImage(chord) {
    switch (chord) {
        default:
            return "../assets/C-chord.jpg";
    }
}

function chordNotes(chord) {
    switch (chord) {
        default:
            return "C, E, G";
    }
}

const MusicMakerHistory = () => <Feed events={events} />


export default MusicMakerHistory;