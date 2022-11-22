function playMusic(color) {
	r = color[0];
	g = color[1];
	b = color[2];
	far = b;
	var key = chooseKey(r, g);
	playchords(key, r, g, far);
}

// ******* INSTRUMENTS *******

//some overall compression to keep the levels in check
var masterCompressor = new Tone.Compressor({
	"threshold" : -6,
	"ratio" : 3,
	"attack" : 0.5,
	"release" : 0.1
});
//give a little boost to the lows
var lowBump = new Tone.Filter(200, "lowshelf");
//route everything through the filter
//and compressor before going to the speakers
var vol = new Tone.Volume(-2);
Tone.Master.chain(vol, lowBump, masterCompressor);

  var MIDI_NUM_NAMES = ["C_1", "C#_1", "D_1", "D#_1", "E_1", "F_1", "F#_1", "G_1", "G#_1", "A_1", "A#_1", "B_1",
                  "C0", "C#0", "D0", "D#0", "E0", "F0", "F#0", "G0", "G#0", "A0", "A#0", "B0",
                  "C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1",
                  "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2",
                  "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3",
                  "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4",
                  "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5",
                  "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6",
                  "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "A#7", "B7",
                  "C8", "C#8", "D8", "D#8", "E8", "F8", "F#8", "G8", "G#8", "A8", "A#8", "B8",
                  "C9", "C#9", "D9", "D#9", "E9", "F9", "F#9", "G9"];

  var lightsynth = new Tone.Sampler({
    "C3" : "Samples/LightPad/PadC3.mp3",
    "C#3" : "Samples/LightPad/PadC#3.mp3",
    "D3" : "Samples/LightPad/PadD3.mp3",
    "D#3" : "Samples/LightPad/PadD#3.mp3",
    "E3" : "Samples/LightPad/PadE3.mp3",
    "F3" : "Samples/LightPad/PadF3.mp3",
    "F#3" : "Samples/LightPad/PadF#3.mp3",
    "G3" : "Samples/LightPad/PadG3.mp3",
    "G#3" : "Samples/LightPad/PadG#3.mp3",
    "A3" : "Samples/LightPad/PadA3.mp3",
    "A#3" : "Samples/LightPad/PadA#3.mp3",
    "B3" : "Samples/LightPad/PadB3.mp3",
    "C4" : "Samples/LightPad/PadC4.mp3",
    "C#4" : "Samples/LightPad/PadC#4.mp3",
    "D4" : "Samples/LightPad/PadD4.mp3",
    "D#4" : "Samples/LightPad/PadD#4.mp3",
    "E4" : "Samples/LightPad/PadE4.mp3",
    "F4" : "Samples/LightPad/PadF4.mp3",
    "F#4" : "Samples/LightPad/PadF#4.mp3",
    "G4" : "Samples/LightPad/PadG4.mp3",
    "G#4" : "Samples/LightPad/PadG#4.mp3",
    "A4" : "Samples/LightPad/PadA4.mp3",
    "A#4" : "Samples/LightPad/PadA#4.mp3",
    "B4" : "Samples/LightPad/PadB4.mp3",
  }, {
    release: 1
  }).toMaster();

  lightsynth.volume.value = -8;


  var modsynth = new Tone.Sampler({
    "C3" : "Samples/ModPad/ModC3.mp3",
    "C#3" : "Samples/ModPad/ModC#3.mp3",
    "D3" : "Samples/ModPad/ModD3.mp3",
    "D#3" : "Samples/ModPad/ModD#3.mp3",
    "E3" : "Samples/ModPad/ModE3.mp3",
    "F3" : "Samples/ModPad/ModF3.mp3",
    "F#3" : "Samples/ModPad/ModF#3.mp3",
    "G3" : "Samples/ModPad/ModG3.mp3",
    "G#3" : "Samples/ModPad/ModG#3.mp3",
    "A3" : "Samples/ModPad/ModA3.mp3",
    "A#3" : "Samples/ModPad/ModA#3.mp3",
    "B3" : "Samples/ModPad/ModB3.mp3",
    "C4" : "Samples/ModPad/ModC4.mp3",
    "C#4" : "Samples/ModPad/ModC#4.mp3",
    "D4" : "Samples/ModPad/ModD4.mp3",
    "D#4" : "Samples/ModPad/ModD#4.mp3",
    "E4" : "Samples/ModPad/ModE4.mp3",
    "F4" : "Samples/ModPad/ModF4.mp3",
    "F#4" : "Samples/ModPad/ModF#4.mp3",
    "G4" : "Samples/ModPad/ModG4.mp3",
    "G#4" : "Samples/ModPad/ModG#4.mp3",
    "A4" : "Samples/ModPad/ModA4.mp3",
    "A#4" : "Samples/ModPad/ModA#4.mp3",
    "B4" : "Samples/ModPad/ModB4.mp3"
  }, {
    release: 1
  }).toMaster();

  modsynth.volume.value = -12;

  var darksynth = new Tone.Sampler({
    "C3" : "Samples/DarkPad/DarkC3.mp3",
    "C#3" : "Samples/DarkPad/DarkC#3.mp3",
    "D3" : "Samples/DarkPad/DarkD3.mp3",
    "D#3" : "Samples/DarkPad/DarkD#3.mp3",
    "E3" : "Samples/DarkPad/DarkE3.mp3",
    "F3" : "Samples/DarkPad/DarkF3.mp3",
    "F#3" : "Samples/DarkPad/DarkF#3.mp3",
    "G3" : "Samples/DarkPad/DarkG3.mp3",
    "G#3" : "Samples/DarkPad/DarkG#3.mp3",
    "A3" : "Samples/DarkPad/DarkA3.mp3",
    "A#3" : "Samples/DarkPad/DarkA#3.mp3",
    "B3" : "Samples/DarkPad/DarkB3.mp3",
    "C4" : "Samples/DarkPad/DarkC4.mp3",
    "C#4" : "Samples/DarkPad/DarkC#4.mp3",
    "D4" : "Samples/DarkPad/DarkD4.mp3",
    "D#4" : "Samples/DarkPad/DarkD#4.mp3",
    "E4" : "Samples/DarkPad/DarkE4.mp3",
    "F4" : "Samples/DarkPad/DarkF4.mp3",
    "F#4" : "Samples/DarkPad/DarkF#4.mp3",
    "G4" : "Samples/DarkPad/DarkG4.mp3",
    "G#4" : "Samples/DarkPad/DarkG#4.mp3",
    "A4" : "Samples/DarkPad/DarkA4.mp3",
    "A#4" : "Samples/DarkPad/DarkA#4.mp3",
    "B4" : "Samples/DarkPad/DarkB4.mp3"
  }, {
    release: 1
  }).toMaster();

  darksynth.volume.value = -12;

  var lightlead = new Tone.Sampler({
    "C4" : "Samples/LightLead/LightLeadC4.mp3",
    "C#4" : "Samples/LightLead/LightLeadC#4.mp3",
    "D4" : "Samples/LightLead/LightLeadD4.mp3",
    "D#4" : "Samples/LightLead/LightLeadD#4.mp3",
    "E4" : "Samples/LightLead/LightLeadE4.mp3",
    "F4" : "Samples/LightLead/LightLeadF4.mp3",
    "F#4" : "Samples/LightLead/LightLeadF#4.mp3",
    "G4" : "Samples/LightLead/LightLeadG4.mp3",
    "G#4" : "Samples/LightLead/LightLeadG#4.mp3",
    "A4" : "Samples/LightLead/LightLeadA4.mp3",
    "A#4" : "Samples/LightLead/LightLeadA#4.mp3",
    "B4" : "Samples/LightLead/LightLeadB4.mp3",
    "C5" : "Samples/LightLead/LightLeadC5.mp3",
    "C#5" : "Samples/LightLead/LightLeadC#5.mp3",
    "D5" : "Samples/LightLead/LightLeadD5.mp3",
    "D#5" : "Samples/LightLead/LightLeadD#5.mp3",
    "E5" : "Samples/LightLead/LightLeadE5.mp3",
    "F5" : "Samples/LightLead/LightLeadF5.mp3",
    "F#5" : "Samples/LightLead/LightLeadF#5.mp3",
    "G5" : "Samples/LightLead/LightLeadG5.mp3",
    "G#5" : "Samples/LightLead/LightLeadG#5.mp3",
    "A5" : "Samples/LightLead/LightLeadA5.mp3",
    "A#5" : "Samples/LightLead/LightLeadA#5.mp3",
    "B5" : "Samples/LightLead/LightLeadB5.mp3",
  }).toMaster();

  lightlead.volume.value = -4;

  var modlead = new Tone.Sampler({
    "C4" : "Samples/ModLead/ModLeadC4.mp3",
    "C#4" : "Samples/ModLead/ModLeadC#4.mp3",
    "D4" : "Samples/ModLead/ModLeadD4.mp3",
    "D#4" : "Samples/ModLead/ModLeadD#4.mp3",
    "E4" : "Samples/ModLead/ModLeadE4.mp3",
    "F4" : "Samples/ModLead/ModLeadF4.mp3",
    "F#4" : "Samples/ModLead/ModLeadF#4.mp3",
    "G4" : "Samples/ModLead/ModLeadG4.mp3",
    "G#4" : "Samples/ModLead/ModLeadG#4.mp3",
    "A4" : "Samples/ModLead/ModLeadA4.mp3",
    "A#4" : "Samples/ModLead/ModLeadA#4.mp3",
    "B4" : "Samples/ModLead/ModLeadB4.mp3",
    "C5" : "Samples/ModLead/ModLeadC5.mp3",
    "C#5" : "Samples/ModLead/ModLeadC#5.mp3",
    "D5" : "Samples/ModLead/ModLeadD5.mp3",
    "D#5" : "Samples/ModLead/ModLeadD#5.mp3",
    "E5" : "Samples/ModLead/ModLeadE5.mp3",
    "F5" : "Samples/ModLead/ModLeadF5.mp3",
    "F#5" : "Samples/ModLead/ModLeadF#5.mp3",
    "G5" : "Samples/ModLead/ModLeadG5.mp3",
    "G#5" : "Samples/ModLead/ModLeadG#5.mp3",
    "A5" : "Samples/ModLead/ModLeadA5.mp3",
    "A#5" : "Samples/ModLead/ModLeadA#5.mp3",
    "B5" : "Samples/ModLead/ModLeadB5.mp3",
  }).toMaster();

  modlead.volume.value = -6;

  var darklead = new Tone.Sampler({
    "C4" : "Samples/DarkLead/DarkLeadC4.mp3",
    "C#4" : "Samples/DarkLead/DarkLeadC#4.mp3",
    "D4" : "Samples/DarkLead/DarkLeadD4.mp3",
    "D#4" : "Samples/DarkLead/DarkLeadD#4.mp3",
    "E4" : "Samples/DarkLead/DarkLeadE4.mp3",
    "F4" : "Samples/DarkLead/DarkLeadF4.mp3",
    "F#4" : "Samples/DarkLead/DarkLeadF#4.mp3",
    "G4" : "Samples/DarkLead/DarkLeadG4.mp3",
    "G#4" : "Samples/DarkLead/DarkLeadG#4.mp3",
    "A4" : "Samples/DarkLead/DarkLeadA4.mp3",
    "A#4" : "Samples/DarkLead/DarkLeadA#4.mp3",
    "B4" : "Samples/DarkLead/DarkLeadB4.mp3",
    "C5" : "Samples/DarkLead/DarkLeadC5.mp3",
    "C#5" : "Samples/DarkLead/DarkLeadC#5.mp3",
    "D5" : "Samples/DarkLead/DarkLeadD5.mp3",
    "D#5" : "Samples/DarkLead/DarkLeadD#5.mp3",
    "E5" : "Samples/DarkLead/DarkLeadE5.mp3",
    "F5" : "Samples/DarkLead/DarkLeadF5.mp3",
    "F#5" : "Samples/DarkLead/DarkLeadF#5.mp3",
    "G5" : "Samples/DarkLead/DarkLeadG5.mp3",
    "G#5" : "Samples/DarkLead/DarkLeadG#5.mp3",
    "A5" : "Samples/DarkLead/DarkLeadA5.mp3",
    "A#5" : "Samples/DarkLead/DarkLeadA#5.mp3",
    "B5" : "Samples/DarkLead/DarkLeadB5.mp3",
  }).toMaster();

  darklead.volume.value = -4;

// ******* END INSTRUMENTS *******



// ******* MUSIC FUNCTIONS *******

    //goes from least chaotic to most chaotic
    var majorchords = [[[0,4,7], [5,9,0], [7,11,2], [0,4,7]], [[2,5,9], [7,11,2], [0,4,7], [9,0,4]], [[5,9,0],[7,11,2],[0,4,7], [5,9,0]], [[5,9,0], [0,4,7], [7,11,2], [9,0,4]]];
    var minorchords = [[[0,3,7], [5,8,0], [7,10,2], [0,3,7]], [[2,5,8], [7,10,2], [0,3,7], [8,0,3]], [[5,8,0],[7,10,2],[0,3,7], [5,8,0]], [[5,8,0], [0,3,7], [7,10,2], [8,0,3]]];
    var majorscale = [0,2,4,5,7,9,11,12];
    var minorscale = [0,2,3,5,7,8,10,12];

    function setReverb(blue) {
      if (blue > 255) {
        val = 255;
      } else {
        val = blue;
      }
      perc = (val) / (255);
      return perc;
    }

    function playPiano(root, key) {
      if (key == 0) {
        var scale = majorscale;
      } else {
        var scale = minorscale;
      }

      var base = root+12;
      var melody = [];

      for(let i=0; i<16; i++) {
        var rand = scale[Math.floor(Math.random()*scale.length)];
        var midi = rand+base;
        var note = MIDI_NUM_NAMES[midi];
        melody.push(note);
      }
      return melody;

    }

    function makeChordArray(root, chordFormula, timeInterval) {
        var indexMIDI
        var aChord = [];

        var chordArray = [];
        for(let i=0; i<chordFormula.length; i++) {
            for(let j=0; j<chordFormula[i].length; j++) {
                // add the root to each chord tone
                indexMIDI = chordFormula[i][j] + Number(root);
                // tranlate to a pitch/octave name
                aChord.push(MIDI_NUM_NAMES[indexMIDI]);
            }
            j = 0;
            // create add time and chord together
            chordArray.push(aChord);
            // now calc the time value for next time
            // clear the arrays;
            aChord = [];
        }
        console.log(chordArray);
        return chordArray;
    }

    function playchords(key, r, g, far) {

      if (key == 0) {
        var chords = majorchords;
      } else {
        var chords = minorchords;
      }

      //use abs value of difference between two to choose a chord progression
      if ((Math.abs(r-g))<10) {

        var progression = chords[0];
      } else if ((Math.abs(r-g))<50) {

        var progression = chords[1];
      } else if ((Math.abs(r-g))<100) {

        var progression = chords[2];
      } else {

        var progression = chords[3];
      }

      if (r>255) {
        r=255;
      }
      if (g>100) {
        g=100;
      }

      var percent = ((r) / (255));
      var root = Math.round(((percent * (72 - 48)) + 48));
      console.log(root);

      var reverb = new Tone.Reverb().toMaster();

      reverb.wet.value = setReverb(far);
      console.log(reverb)

      if (r<75) {
        var mainsynth = lightsynth;
      } else if (r<150) {
        var mainsynth = modsynth;
      } else {
        var mainsynth = darksynth;
      }

      if (g<75) {
        var lead = lightlead;
      } else if (g<150) {
        var lead = modlead;
      } else {
        var lead = darklead;
      }

      mainsynth.connect(reverb);

      var myChords = makeChordArray(root, progression, '1m');
      var chordPart = new Tone.Sequence(function(time, chord){
        mainsynth.triggerAttackRelease(chord, "1m");
      }, myChords, "1m" ).start(0);

      var pianos = playPiano(root, key);
      var pianoPart = new Tone.Sequence(function(time, note){
        lead.triggerAttackRelease(note, "4n");
      }, pianos, "4n" ).start(0);

      lead.connect(reverb);

      console.log(pianoPart);

      chordPart.humanize= true;
      chordPart.loop = true;
      chordPart.loopStart = "0.0";
      chordPart.loopEnd = "4.0";

      pianoPart.humanize = true;
      pianoPart.loop = true;
      pianoPart.loopStart = "0.0";
      pianoPart.loopEnd = "4.0";

    	var tempo = 30;
    	Tone.Transport.bpm.value = tempo;
    	Tone.Transport.start("+0.1");
    }

  function chooseKey(r, g) {
    if (r>g) {
      // major scale
      return 0;
    } else {
      // minor scale
      return 1;
    }
  }

// ******* END MUSIC FUNCTIONS *******
