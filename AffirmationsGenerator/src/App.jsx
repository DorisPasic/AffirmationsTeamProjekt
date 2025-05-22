import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    message: null,
    isMessageVisible: false,
  };

  messages = [
    { en: "I love myself unconditionally! ❤️", 
      de: "Ich liebe mich bedingungslos! ❤️" },
    { en: "I am a good person who deserves to be happy! 😊", de: "Ich bin ein guter Mensch, der es verdient, glücklich zu sein! 😊" },
    { en: "I take pride in who I am! 🌟", de: "Ich bin stolz darauf, wer ich bin! 🌟" },
    { en: "I am happy just being me! 😄", de: "Ich bin glücklich, einfach ich selbst zu sein! 😄" },
    { en: "I am totally comfortable being myself !🛋️", de: "Ich fühle mich vollkommen wohl, ich selbst zu sein! 🛋️" },
    { en: "I have limitless confidence in my abilities! 🚀", de: "Ich habe grenzenloses Vertrauen in meine Fähigkeiten! 🚀" },
    { en: "I accept myself deeply and completely! 🌈", de: "Ich akzeptiere mich tief und vollständig! 🌈" },
    { en: "I have accomplished great things! 🏆", de: "Ich habe großartige Dinge erreicht! 🏆" },
    { en: "Others are inspired by my ability to be myself! 🌟", de: "Andere sind von meiner Fähigkeit, ich selbst zu sein, inspiriert! 🌟" },
    { en: "I have confidence in my ability to do whatever I set my mind to! 💪", de: "Ich habe Vertrauen in meine Fähigkeit, alles zu tun, was ich mir vornehme! 💪" },
    { en: "I am finding it easier to love and accept myself! 💖", de: "Es fällt mir leichter, mich selbst zu lieben und zu akzeptieren! 💖" },
    { en: "Each day I become more confident in who I am! 🌅", de: "Jeden Tag werde ich selbstbewusster, wer ich bin! 🌅" },
    { en: "I will take time to remember all my accomplishments! 🕰️", de: "Ich werde mir Zeit nehmen, um mich an all meine Errungenschaften zu erinnern! 🕰️" },
    { en: "I will love myself unconditionally no matter what! 💕", de: "Ich werde mich bedingungslos lieben, egal was passiert! 💕" },
    { en: "I am beginning to see all the positive qualities and traits that I have! 🌸", de: "Ich beginne, all die positiven Eigenschaften und Merkmale zu sehen, die ich habe! 🌸" },
    { en: "Others are starting to notice my self acceptance and improved confidence! 👏", de: "Andere beginnen, meine Selbstakzeptanz und mein gestärktes Selbstvertrauen zu bemerken! 👏" },
    { en: "I am discovering more wonderful things about myself with each passing day! 🌟", de: "Ich entdecke jeden Tag mehr wunderbare Dinge über mich selbst! 🌟" },
    { en: "I am beginning to truly love myself! 💗", de: "Ich beginne, mich wirklich zu lieben! 💗" },
    { en: "Loving myself feels more natural and effortless! 🌿", de: "Mich selbst zu lieben fühlt sich natürlicher und müheloser an! 🌿" },
    { en: "I will always accept myself unconditionally! 🌻", de: "Ich werde mich immer bedingungslos akzeptieren! 🌻" },
    { en: "Loving myself is essential to my happiness! 🌞", de: "Mich selbst zu lieben ist wesentlich für mein Glück! 🌞" },
    { en: "I deserve to go after my goals and do what makes me happy! 🎯", de: "Ich verdiene es, meine Ziele zu verfolgen und das zu tun, was mich glücklich macht! 🎯" },
    { en: "I find it easy to recognize my positive qualities! 🌟", de: "Es fällt mir leicht, meine positiven Eigenschaften zu erkennen! 🌟" },
    { en: "Being happy with myself is a normal part of my every day life! 🌈", de: "Mit mir selbst glücklich zu sein, ist ein normaler Teil meines täglichen Lebens! 🌈" },
    { en: "I find it easy to be confident and comfortable with who I am! 💃", de: "Es fällt mir leicht, selbstbewusst und zufrieden mit mir selbst zu sein! 💃" },
    { en: "Accepting myself unconditionally gives me the power to succeed! 🔑", de: "Mich bedingungslos zu akzeptieren, gibt mir die Kraft, erfolgreich zu sein! 🔑" },
    { en: "I know I have the right to be happy and nothing can take that away from me! 🌟", de: "Ich weiß, dass ich das Recht habe, glücklich zu sein, und nichts kann mir das nehmen! 🌟" },
    { en: "Loving myself and being happy with who I am comes naturally to me! 🌼", de: "Mich selbst zu lieben und glücklich mit mir zu sein, fällt mir ganz natürlich! 🌼" },
    { en: "I truly like myself and this helps others to accept me for who I am! 🤝", de: "Ich mag mich wirklich, und das hilft anderen, mich so zu akzeptieren, wie ich bin! 🤝" },
    { en: "I have a natural awareness of all the positive things in my life! 🌟", de: "Ich habe ein natürliches Bewusstsein für all die positiven Dinge in meinem Leben! 🌟" },
    { en: "Your life is already a miracle of chance waiting for you to shape its destiny!🌟", de: "Dein Leben ist bereits ein Wunder des Zufalls, das darauf wartet, dass du sein Schicksal gestaltest!🌟" }
  ];

  generateMessage = () => {
    const randomMessage = this.messages[Math.floor(Math.random() * this.messages.length)];
    this.setState({ message: randomMessage, isMessageVisible: true });

    setTimeout(() => {
      this.setState({ isMessageVisible: false });
    }, 90000);
  };

  render() {
    return (
      <div>
      {/* Headline */}
      
      <div className="zitat">
        {this.state.isMessageVisible && (
        <div className="text">
          <h2>{this.state.message.en}</h2>
          <h3>{this.state.message.de}</h3>
       
       </div>
        )}
        <br />
        <button onClick={this.generateMessage}>Generate Affirmation</button>
      </div>
      </div>
    );
  }
}

export default App;