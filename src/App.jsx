import "./App.css";
import Card from "./card";

function App() {
  const emoji = [
    {
      id: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p",
      emoji: "😀",
      name: "Grinning Face",
      meaning:
        "A happy, smiling face. Expresses joy, happiness, and amusement.",
    },
    {
      id: "q2r3s4t-u5v6-7w8x-9y0z-a1b2c3d4e5",
      emoji: "😃",
      name: "Smiling Face with Open Mouth",
      meaning:
        "A happy, smiling face with an open mouth. Expresses joy, excitement, and broad happiness.",
    },
    {
      id: "f6g7h8i-j9k0-l1m2-n3o4-p5q6r7s8t9",
      emoji: "😄",
      name: "Smiling Face with Open Mouth and Smiling Eyes",
      meaning:
        "A happy, smiling face with open mouth and smiling eyes. Expresses genuine happiness and joy.",
    },
    {
      id: "u0v1w2x-y3z4-a5b6-c7d8-e9f0g1h2i3",
      emoji: "😁",
      name: "Beaming Face with Smiling Eyes",
      meaning:
        "A happy, smiling face with smiling eyes. Expresses intense happiness, joy, pride, and triumph.",
    },
    {
      id: "j4k5l6m-n7o8-p9q0-r1s2-t3u4v5w6x7",
      emoji: "😆",
      name: "Grinning Face with Squinting Eyes",
      meaning:
        "A face with a big, happy grin and squinting eyes. Expresses extreme happiness, joy, and laughter.",
    },
    {
      id: "y8z9a0b-c1d2-e3f4-g5h6-i7j8k9l0m1",
      emoji: "😅",
      name: "Grinning Face with Sweat",
      meaning:
        "A happy, grinning face with a single bead of sweat. Expresses nervous or embarrassed laughter or happiness.",
    },
    {
      id: "n2o3p4q-r5s6-t7u8-v9w0-x1y2z3a4b5",
      emoji: "🤣",
      name: "Rolling on the Floor Laughing",
      meaning:
        "A face laughing so hard that it is rolling on the floor. Expresses hysterical laughter and amusement.",
    },
    {
      id: "c6d7e8f-g9h0-i1j2-k3l4-m5n6o7p8q9",
      emoji: "😂",
      name: "Face with Tears of Joy",
      meaning:
        "A face with a big grin, eyes closed, and tears streaming down from the laughter. Expresses uncontrollable laughter and joy.",
    },
    {
      id: "r0s1t2u-v3w4-x5y6-z7a8-b9c0d1e2f3",
      emoji: "🙂",
      name: "Slightly Smiling Face",
      meaning:
        "A slightly smiling face. Expresses a mild, calm, and content emotion.",
    },
    {
      id: "g4h5i6j-k7l8-m9n0-p1q2-r3s4t5u6v7",
      emoji: "🙃",
      name: "Upside-Down Face",
      meaning:
        "A face turned upside-down. Expresses sarcasm, irony, playfulness, or being silly.",
    },
    {
      id: "w8x9y0z-a1b2-c3d4-e5f6-g7h8i9j0k1",
      emoji: "😉",
      name: "Winking Face",
      meaning:
        "A face with a winking eye. Expresses a playful, flirtatious, or suggestive message.",
    },
    {
      id: "l2m3n4o-p5q6-r7s8-t9u0-v1w2x3y4z5",
      emoji: "😊",
      name: "Smiling Face with Smiling Eyes",
      meaning:
        "A happy, smiling face with smiling eyes. Expresses genuine happiness and contentment.",
    },
    {
      id: "a6b7c8d-e9f0-g1h2-i3j4-k5l6m7n8o9",
      emoji: "😇",
      name: "Smiling Face with Halo",
      meaning:
        "A smiling face with a halo above it. Represents someone who is good, innocent, or pure.",
    },
    {
      id: "p0q1r2s-t3u4-v5w6-x7y8-z9a0b1c2d3",
      emoji: "🥰",
      name: "Smiling Face with Hearts",
      meaning:
        "A smiley face with hearts around it. Expresses love, affection, and happiness.",
    },
    {
      id: "e4f5g6h-i7j8-k9l0-m1n2-o3p4q5r6s7",
      emoji: "😍",
      name: "Smiling Face with Heart-Eyes",
      meaning:
        "A face with heart-shaped eyes. Expresses deep love, infatuation, and adoration.",
    },
    {
      id: "t8u9v0w-x1y2-z3a4-b5c6-d7e8f9g0h1",
      emoji: "🤩",
      name: "Star-Struck",
      meaning:
        "A face with stars around it. Expresses awe, amazement, and excitement.",
    },
    {
      id: "i2j3k4l-m5n6-o7p8-q9r0-s1t2u3v4w5",
      emoji: "😘",
      name: "Face Blowing a Kiss",
      meaning:
        "A face blowing a kiss. Expresses affection, love, or gratitude.",
    },
    {
      id: "x6y7z8a-b9c0-d1e2-f3g4-h5i6j7k8l9",
      emoji: "😗",
      name: "Kissing Face",
      meaning:
        "A face with pursed lips. Expresses a gentle, affectionate kiss.",
    },
    {
      id: "m0n1o2p-q3r4-s5t6-u7v8-w9x0y1z2a3",
      emoji: "☺",
      name: "Smiling Face",
      meaning:
        "A simple, classic smiley face. Expresses a general feeling of happiness and contentment.",
    },
    {
      id: "b4c5d6e-f7g8-h9i0-j1k2-l3m4n5o6p7",
      emoji: "😚",
      name: "Kissing Face with Closed Eyes",
      meaning:
        "A face with closed eyes and pursed lips. Expresses a tender, affectionate kiss.",
    },
    {
      id: "q8r9s0t-u1v2-w3x4-y5z6-a7b8c9d0e1",
      emoji: "😙",
      name: "Kissing Face with Smiling Eyes",
      meaning:
        "A face with smiling eyes and pursed lips. Expresses a warm, gentle kiss.",
    },
    {
      id: "f2g3h4i-j5k6-l7m8-n9o0-p1q2r3s4t5",
      emoji: "🥲",
      name: "Smiling Face with Tear",
      meaning:
        "A smiling face with a single tear. Expresses bittersweet emotions, like happiness mixed with sadness.",
    },
    {
      id: "u6v7w8x-y9z0-a1b2-c3d4-e5f6g7h8i9",
      emoji: "😋",
      name: "Face Savoring Food",
      meaning:
        "A face with a tongue sticking out, as if savoring delicious food. Expresses enjoyment of food or a tasty treat.",
    },
    {
      id: "j0k1l2m-n3o4-p5q6-r7s8-t9u0v1w2x3",
      emoji: "😌",
      name: "Relieved Face",
      meaning:
        "A calm, relieved expression. Expresses a sense of ease or relaxation after a stressful situation.",
    },
    {
      id: "y4z5a6b-c7d8-e9f0-g1h2-i3j4k5l6m7",
      emoji: "😔",
      name: "Pensive Face",
      meaning:
        "A thoughtful, pensive expression. Expresses sadness, contemplation, or deep thought.",
    },
    {
      id: "n8o9p0q-r1s2-t3u4-v5w6-x7y8z9a0b1",
      emoji: "😟",
      name: "Worried Face",
      meaning: "A face with a furrowed brow, expressing worry or concern.",
    },
    {
      id: "c2d3e4f-g5h6-i7j8-k9l0-m1n2o3p4q5",
      emoji: "😕",
      name: "Confused Face",
      meaning:
        "A face with a puzzled or bewildered expression, showing confusion.",
    },
    {
      id: "r6s7t8u-v9w0-x1y2-z3a4-b5c6d7e8f9",
      emoji: "🙁",
      name: "Slightly Frowning Face",
      meaning:
        "A face with a slight frown, expressing a mild degree of sadness or displeasure.",
    },
    {
      id: "g0h1i2j-k3l4-m5n6-o7p8-q9r0s1t2u3",
      emoji: "😮‍💨",
      name: "Face Exhaling",
      meaning:
        "A face with an exhalation of breath, expressing relief or fatigue.",
    },
    {
      id: "v4w5x6y-z7a8-b9c0-d1e2-f3g4h5i6j7",
      emoji: "😣",
      name: "Persevering Face",
      meaning:
        "A face with a strained, determined expression, suggesting perseverance or effort.",
    },
    {
      id: "k8l9m0n-o1p2-q3r4-s5t6-u7v8w9x0y1",
      emoji: "😖",
      name: "Confounded Face",
      meaning:
        "A face with a perplexed or bewildered expression, showing confusion or frustration.",
    },
    {
      id: "z2a3b4c-d5e6-f7g8-h9i0-j1k2l3m4n5",
      emoji: "😫",
      name: "Tired Face",
      meaning:
        "A face with a weary, exhausted expression, showing fatigue or weariness.",
    },
    {
      id: "o6p7q8r-s9t0-u1v2-w3x4-y5z6a7b8c9",
      emoji: "😞",
      name: "Disappointed Face",
      meaning:
        "A face with a frowning expression, showing disappointment or sadness.",
    },
    {
      id: "d0e1f2g-h3i4-j5k6-l7m8-n9o0p1q2r3",
      emoji: "😓",
      name: "Downcast Face with Sweat",
      meaning:
        "A face with a frowning expression and beads of sweat, suggesting stress or discomfort.",
    },
    {
      id: "s4t5u6v-w7x8-y9z0-a1b2-c3d4e5f6g7",
      emoji: "😥",
      name: "Sad but Relieved Face",
      meaning:
        "A face with a slightly frowning expression, but also a sense of relief, as if after a difficult situation.",
    },
    {
      id: "h8i9j0k-l1m2-n3o4-p5q6-r7s8t9u0v1",
      emoji: "😢",
      name: "Crying Face",
      meaning:
        "A face with tears streaming down, expressing sadness, grief, or emotional pain.",
    },
    {
      id: "w2x3y4z-a0b1-c2d3-e4f5-g6h7i8j9k0",
      emoji: "😭",
      name: "Loudly Crying Face",
      meaning:
        "A face with intense tears streaming down, expressing deep sorrow or anguish.",
    },
    {
      id: "l1m2n3o-p4q5-r6s7-t8u9-v0w1x2y3z4",
      emoji: "😰",
      name: "Anxious Face with Sweat",
      meaning:
        "A face with a worried expression and beads of sweat, indicating anxiety or stress.",
    },
    {
      id: "a5b6c7d-e8f9-g0h1-i2j3-k4l5m6n7o8",
      emoji: "😨",
      name: "Fearful Face",
      meaning:
        "A face with wide eyes and an open mouth, expressing fear or terror.",
    },
    {
      id: "p9q0r1s-t2u3-v4w5-x6y7-z8a9b0c1d2",
      emoji: "😱",
      name: "Screaming Face",
      meaning:
        "A face with an extreme expression of fear or panic, as if screaming.",
    },
    {
      id: "e3f4g5h-i6j7-k8l9-m0n1-o2p3q4r5s6",
      emoji: "😳",
      name: "Flushed Face",
      meaning:
        "A face with reddened cheeks, suggesting embarrassment, shock, or strong emotion.",
    },
    {
      id: "t7u8v9w-x0y1-z2a3-b4c5-d6e7f8g9h0",
      emoji: "🤗",
      name: "Hugging Face",
      meaning:
        "A face with arms extended, as if offering a hug, expressing affection or comfort.",
    },
    {
      id: "1a2b3c4-d5e6-7f8g-h9i0-j1k2l3m4n5",
      emoji: "🤔",
      name: "Thinking Face",
      meaning:
        "A face with a thoughtful expression, suggesting deep thought or contemplation.",
    },
    {
      id: "5o6p7q8-r9s0-t1u2-v3w4-x5y6z7a8b9",
      emoji: "🤫",
      name: "Shushing Face",
      meaning:
        "A face with a finger raised to the lips, signaling the need for silence or quiet.",
    },
    {
      id: "c0d1e2f-g3h4-i5j6-k7l8-m9n0p1q2r3",
      emoji: "🤭",
      name: "Smiling Face with Hand Covering Mouth",
      meaning:
        "A face with a hand covering the mouth, expressing a polite or coy smile.",
    },
    {
      id: "s4t5u6v-w7x8-y9z0-a1b2-c3d4e5f6g7",
      emoji: "🤞",
      name: "Crossed Fingers",
      meaning:
        "A hand gesture with the index and middle fingers crossed, expressing hope or wishing for good luck.",
    },
    {
      id: "h8i9j0k-l1m2-n3o4-p5q6-r7s8t9u0v1",
      emoji: "🤟",
      name: "Love-You Gesture",
      meaning:
        "A hand gesture with the index finger and pinky finger extended, expressing I love you in American Sign Language.",
    },
    {
      id: "w2x3y4z-a0b1-c2d3-e4f5-g6h7i8j9k0",
      emoji: "🤘",
      name: "Sign of the Horns",
      meaning:
        "A hand gesture with the index finger and pinky finger extended, a symbol associated with rock music and heavy metal culture.",
    },
    {
      id: "l1m2n3o-p4q5-r6s7-t8u9-v0w1x2y3z4",
      emoji: "🤙",
      name: "Call Me Hand",
      meaning:
        "A hand gesture with the thumb and little finger extended, signaling a call me gesture.",
    },
    {
      id: "a5b6c7d-e8f9-g0h1-i2j3-k4l5m6n7o8",
      emoji: "👋",
      name: "Waving Hand",
      meaning: "A hand waving, expressing a greeting or a goodbye.",
    },
    {
      id: "p9q0r1s-t2u3-v4w5-x6y7-z8a9b0c1d2",
      emoji: "👌",
      name: "OK Hand",
      meaning:
        "A hand gesture with the index finger and thumb forming a circle, expressing approval or that something is okay.",
    },
    {
      id: "e3f4g5h-i6j7-k8l9-m0n1-o2p3q4r5s6",
      emoji: "✌",
      name: "Victory Hand",
      meaning:
        "A hand gesture with the index and middle fingers raised, expressing peace, victory, or the peace sign",
    },
    {
      id: "1a2b3c4-d5e6-7f8g-h9i0-j1k2l3m4n5",
      emoji: "👍",
      name: "Thumbs Up",
      meaning:
        "A hand gesture with the thumb raised, expressing approval, agreement, or encouragement.",
    },
    {
      id: "5o6p7q8-r9s0-t1u2-v3w4-x5y6z7a8b9",
      emoji: "👎",
      name: "Thumbs Down",
      meaning:
        "A hand gesture with the thumb lowered, expressing disapproval, disagreement, or dislike.",
    },
    {
      id: "c0d1e2f-g3h4-i5j6-k7l8-m9n0p1q2r3",
      emoji: "👏",
      name: "Clapping Hands",
      meaning:
        "A gesture of applauding or clapping, expressing appreciation, approval, or encouragement.",
    },
    {
      id: "s4t5u6v-w7x8-y9z0-a1b2-c3d4e5f6g7",
      emoji: "🙌",
      name: "Raising Hands",
      meaning:
        "A gesture of raising both hands, expressing joy, celebration, or victory.",
    },
    {
      id: "h8i9j0k-l1m2-n3o4-p5q6-r7s8t9u0v1",
      emoji: "👐",
      name: "Open Hands",
      meaning:
        "A gesture of open hands, expressing openness, welcome, or surrender.",
    },
    {
      id: "w2x3y4z-a0b1-c2d3-e4f5-g6h7i8j9k0",
      emoji: "🤲",
      name: "Palms Up Together",
      meaning:
        "A gesture of holding the palms facing upwards, often used to express supplication or request.",
    },
    {
      id: "l1m2n3o-p4q5-r6s7-t8u9-v0w1x2y3z4",
      emoji: "🤝",
      name: "Handshake",
      meaning:
        "A gesture of two hands shaking, expressing agreement, greeting, or a deal being made.",
    },
    {
      id: "a5b6c7d-e8f9-g0h1-i2j3-k4l5m6n7o8",
      emoji: "🤦‍♂",
      name: "Man Facepalming",
      meaning:
        "A gesture of a man placing his hand on his face, expressing frustration, disappointment, or disbelief.",
    },
    {
      id: "p9q0r1s-t2u3-v4w5-x6y7-z8a9b0c1d2",
      emoji: "🤦‍♀",
      name: "Woman Facepalming",
      meaning:
        "A gesture of a woman placing her hand on her face, expressing frustration, disappointment, or disbelief.",
    },
    {
      id: "e3f4g5h-i6j7-k8l9-m0n1-o2p3q4r5s6",
      emoji: "🤷‍♂",
      name: "Man Shrugging",
      meaning:
        "A gesture of a man shrugging his shoulders, expressing uncertainty, indifference, or lack of knowledge.",
    },
    {
      id: "t7u8v9w-x0y1-z2a3-b4c5-d6e7f8g9h0",
      emoji: "🤷‍♀",
      name: "Woman Shrugging",
      meaning:
        "A gesture of a woman shrugging her shoulders, expressing uncertainty, indifference, or lack of knowledge.",
    },
    {
      id: "1i2j3k4-l5m6-7n8o-p9q0-r1s2t3u4v5",
      emoji: "🙏",
      name: "Folded Hands",
      meaning:
        "A gesture of hands pressed together, often used to express gratitude, prayer, or reverence.",
    },
    {
      id: "6w7x8y9-z0a1-b2c3-d4e5-f6g7h8i9j0",
      emoji: "✍",
      name: "Writing Hand",
      meaning:
        "A hand gesture with a pen or pencil, representing the act of writing or taking notes.",
    },
    {
      id: "k1l2m3n-o4p5-q6r7-s8t9-u0v1w2x3y4",
      emoji: "💅",
      name: "Nail Polish",
      meaning:
        "A hand gesture with painted nails, often used to represent self-care, grooming, or nail art.",
    },
    {
      id: "z5a6b7c-d8e9-f0g1-h2i3-j4k5l6m7n8",
      emoji: "👂",
      name: "Ear",
      meaning:
        "The image of an ear, representing the sense of hearing or listening.",
    },
    {
      id: "o9p0q1r-s2t3-u4v5-w6x7-y8z9a0b1c2",
      emoji: "👃",
      name: "Nose",
      meaning:
        "The image of a nose, representing the sense of smell or breathing.",
    },
    {
      id: "d3e4f5g-h6i7-j8k9-l0m1-n2o3p4q5r6",
      emoji: "👀",
      name: "Eyes",
      meaning:
        "The image of a pair of eyes, representing the sense of sight or observation.",
    },
    {
      id: "s7t8u9v-w0x1-y2z3-a4b5-c6d7e8f9g0",
      emoji: "👅",
      name: "Tongue",
      meaning:
        "The image of a tongue, representing the sense of taste or speech.",
    },
    {
      id: "h1i2j3k-l4m5-n6o7-p8q9-r0s1t2u3v4",
      emoji: "👄",
      name: "Mouth",
      meaning:
        "The image of a mouth, representing the sense of speech, eating, or kissing.",
    },
    {
      id: "a7b8c9d-e0f1-2g3h-4i5j-k6l7m8n9o0",
      emoji: "🧠",
      name: "Brain",
      meaning:
        "The image of a human brain, representing intelligence and cognitive abilities.",
    },
    {
      id: "p1q2r3s-t4u5-6v7w-8x9y-z0a1b2c3d4",
      emoji: "👁‍🗨",
      name: "Eye in Speech Bubble",
      meaning:
        "The image of an eye inside a speech bubble, representing observation, insight, or surveillance.",
    },
    {
      id: "e5f6g7h-i8j9-k0l1-m2n3-o4p5q6r7s8",
      emoji: "🧠",
      name: "Shushing Face",
      meaning:
        "A face with a finger raised to the lips, signaling the need for silence or quiet.",
    },
    {
      id: "t9u0v1w-x2y3-z4a5-b6c7-d8e9f0g1h2",
      emoji: "🤖",
      name: "Robot",
      meaning:
        "The image of a robot, representing technology, artificial intelligence, or futuristic concepts.",
    },
    {
      id: "i3j4k5l-m6n7-o8p9-q0r1-s2t3u4v5w6",
      emoji: "💻",
      name: "Laptop",
      meaning:
        "The image of a laptop computer, representing technology, work, or digital communication.",
    },
    {
      id: "x7y8z9a-b0c1-d2e3-f4g5-h6i7j8k9l0",
      emoji: "🏠",
      name: "House",
      meaning:
        "The image of a house, representing a place of residence, home, or shelter.",
    },
    {
      id: "m1n2o3p-q4r5-s6t7-u8v9-w0x1y2z3a4",
      emoji: "🌎",
      name: "Globe",
      meaning:
        "The image of a globe, representing the earth, geography, or a global perspective.",
    },
    {
      id: "b5c6d7e-f8g9-h0i1-j2k3-l4m5n6o7p8",
      emoji: "🌳",
      name: "Tree",
      meaning:
        "The image of a tree, representing nature, growth, or the environment.",
    },
    {
      id: "q9r0s1t-u2v3-w4x5-y6z7-a8b9c0d1e2",
      emoji: "🌈",
      name: "Rainbow",
      meaning:
        "The image of a rainbow, representing diversity, inclusivity, or a positive, optimistic outlook.",
    },
    {
      id: "f3g4h5i-j6k7-l8m9-n0p1-q2r3s4t5u6",
      emoji: "🌙",
      name: "Crescent Moon",
      meaning:
        "The image of a crescent moon, representing nighttime, dreams, or the cycle of the moon.",
    },
    {
      id: "a1b2c3d-e4f5-6g7h-i8j9-k0l1m2n3o4",
      emoji: "🌺",
      name: "Flowering Plant",
      meaning:
        "The image of a flowering plant, representing nature, growth, and beauty.",
    },
    {
      id: "p5q6r7s-t8u9-v0w1-x2y3-z4a5b6c7d8",
      emoji: "🌸",
      name: "Cherry Blossom",
      meaning:
        "The image of a cherry blossom, representing spring, renewal, and Japanese culture.",
    },
    {
      id: "e9f0g1h-i2j3-k4l5-m6n7-o8p9q0r1s2",
      emoji: "🌷",
      name: "Tulip",
      meaning:
        "The image of a tulip flower, representing springtime, joy, and elegance.",
    },
    {
      id: "t3u4v5w-x6y7-z8a9-b0c1-d2e3f4g5h6",
      emoji: "🌞",
      name: "Sun",
      meaning:
        "The image of a sun, representing warmth, positivity, and a new day.",
    },
    {
      id: "i7j8k9l-m0n1-o2p3-q4r5-s6t7u8v9w0",
      emoji: "🌝",
      name: "Full Moon",
      meaning:
        "The image of a full moon, representing nighttime, mystery, and the lunar cycle.",
    },
    {
      id: "x1y2z3a-b4c5-d6e7-f8g9-h0i1j2k3l4",
      emoji: "🌜",
      name: "New Moon",
      meaning:
        "The image of a new moon, representing the start of a new cycle or phase.",
    },
    {
      id: "m5n6o7p-q8r9-s0t1-u2v3-w4x5y6z7a8",
      emoji: "🌟",
      name: "Glowing Star",
      meaning:
        "The image of a glowing star, representing achievement, inspiration, and wishes.",
    },
    {
      id: "b9c0d1e-f2g3-h4i5-j6k7-l8m9n0o1p2",
      emoji: "🌠",
      name: "Shooting Star",
      meaning:
        "The image of a shooting star, representing a wish, luck, or a fleeting moment.",
    },
    {
      id: "q3r4s5t-u6v7-w8x9-y0z1-a2b3c4d5e6",
      emoji: "☀",
      name: "Sun",
      meaning:
        "The image of a simple sun, representing warmth, light, and a new day.",
    },
    {
      id: "f7g8h9i-j0k1-l2m3-n4o5-p6q7r8s9t0",
      emoji: "☁",
      name: "Cloud",
      meaning:
        "The image of a cloud, representing the weather, the sky, or a calm, peaceful mood.",
    },
    {
      id: "u1v2w3x-y4z5-a6b7-c8d9-e0f1g2h3i4",
      emoji: "⭐",
      name: "Star",
      meaning:
        "The image of a simple star, representing achievement, dreams, or a wish.",
    },
    {
      id: "j5k6l7m-n8o9-p0q1-r2s3-t4u5v6w7x8",
      emoji: "🌓",
      name: "Half Moon",
      meaning:
        "The image of a half moon, representing balance, transition, or a changing perspective.",
    },
    {
      id: "y9z0a1b-c2d3-e4f5-g6h7-i8j9k0l1m2",
      emoji: "🌒",
      name: "Waxing Crescent Moon",
      meaning:
        "The image of a waxing crescent moon, representing growth, optimism, or a new beginning.",
    },
    {
      id: "n3o4p5q-r6s7-t8u9-v0w1-x2y3z4a5b6",
      emoji: "🌔",
      name: "Waxing Gibbous Moon",
      meaning:
        "The image of a waxing gibbous moon, representing increase, abundance, or a period of progress.",
    },
    {
      id: "c7d8e9f-g0h1-i2j3-k4l5-m6n7o8p9q0",
      emoji: "🌖",
      name: "Waning Gibbous Moon",
      meaning:
        "The image of a waning gibbous moon, representing letting go, reflection, or a period of decline.",
    },
    {
      id: "r1s2t3u-v4w5-x6y7-z8a9-b0c1d2e3f4",
      emoji: "🌘",
      name: "Waning Crescent Moon",
      meaning:
        "The image of a waning crescent moon, representing rest, closure, or the end of a cycle.",
    },
    {
      id: "g5h6i7j-k8l9-m0n1-o2p3-q4r5s6t7u8",
      emoji: "🌛",
      name: "New Crescent Moon",
      meaning:
        "The image of a new crescent moon, representing a fresh start, renewal, or the beginning of a new phase.",
    },
    {
      id: "v9w0x1y-z2a3-b4c5-d6e7-f8g9h0i1j2",
      emoji: "🌜",
      name: "Last Quarter Moon",
      meaning:
        "The image of a last quarter moon, representing a time of introspection, letting go, or the end of a cycle.",
    },
    {
      id: "k3l4m5n-o6p7-q8r9-s0t1-u2v3w4x5y6",
      emoji: "🌝",
      name: "Full Moon",
      meaning:
        "The image of a full moon, representing completion, fulfillment, or a time of heightened emotions.",
    },
  ];
  const emoji1 = [
    {
      id: "8cadd201-06e6-4f3f-b6ac-15c2feb1d291",
      emoji: "☂",
      name: "Umbrella",
      meaning:
        "The image of an umbrella, representing protection, rainy weather, or a precautionary measure.",
    },
    {
      id: "af6ba6a0-6e38-4b36-afd0-61a1ed3b1e6e",
      emoji: "⛅",
      name: "Sun Behind Cloud",
      meaning:
        "The image of a sun partially obscured by a cloud, representing changing or mixed weather conditions.",
    },
    {
      id: "b0c20746-2d4a-4d08-bc6f-e78f6ab6b50e",
      emoji: "⛈",
      name: "Cloud with Lightning and Rain",
      meaning:
        "The image of a cloud with lightning and raindrops, representing a thunderstorm or stormy weather.",
    },
    {
      id: "b43d5d7f-e048-4859-ba9a-de7392d92fda",
      emoji: "🌤",
      name: "Sun Behind Small Cloud",
      meaning:
        "The image of a sun with a small cloud in front of it, representing a partially cloudy or hazy day.",
    },
    {
      id: "b9c0d81b-a965-472b-8afe-5c1dc1aff1c2",
      emoji: "🌥",
      name: "Sun Behind Large Cloud",
      meaning:
        "The image of a sun partially obscured by a larger cloud, representing a mostly cloudy day.",
    },
    {
      id: "c14ac36a-e8fd-4f29-a308-b46344e2d3dc",
      emoji: "🌦",
      name: "Sun Behind Rain Cloud",
      meaning:
        "The image of a sun behind a cloud with raindrops, representing an impending or ongoing rainy weather.",
    },
    {
      id: "c2d7f3fe-9860-4af0-b3ad-6c0c3789f8b4",
      emoji: "🌧",
      name: "Cloud with Rain",
      meaning:
        "The image of a cloud with raindrops, representing ongoing or expected rainfall.",
    },
    {
      id: "c55f4b43-f139-4b20-9a7e-6eef34d0713a",
      emoji: "🌨",
      name: "Cloud with Snow",
      meaning:
        "The image of a cloud with snowflakes, representing snowy or wintry weather.",
    },
    {
      id: "c8c4aa52-a677-4ca1-87f4-1189985fea1a",
      emoji: "🌩",
      name: "Cloud with Lightning",
      meaning:
        "The image of a cloud with lightning bolts, representing a thunderstorm or stormy conditions.",
    },
    {
      id: "d0c0b5d5-7d79-4b00-b7f9-3f679d00a23a",
      emoji: "🌪",
      name: "Tornado",
      meaning:
        "The image of a tornado or twister, representing a powerful, destructive weather event.",
    },
    {
      id: "d3dfac5a-e2a8-4f19-8642-60c3dd0fb21e",
      emoji: "🌫",
      name: "Fog",
      meaning:
        "The image of a foggy or misty atmosphere, representing reduced visibility or a hazy environment.",
    },
    {
      id: "d6e53868-a28d-4a17-86c1-7f1a63f1e8f1",
      emoji: "🌬",
      name: "Blowing Wind",
      meaning:
        "The image of wind blowing, representing a breezy or windy weather condition.",
    },
    {
      id: "d9556c42-0d46-4612-9a08-d2f7b26d2151",
      emoji: "🌊",
      name: "Wave",
      meaning:
        "The image of a cresting wave, representing the ocean, bodies of water, or a sense of movement.",
    },
    {
      id: "de6abae6-d48e-4f19-8642-60c3dd0fb21e",
      emoji: "💤",
      name: "Zzz",
      meaning:
        "The image of three lowercase 'z's, representing sleep, rest, or drowsiness.",
    },
    {
      id: "ec382c93-c6d6-4f84-981b-ae75d1f28d60",
      emoji: "🧷",
      name: "Safety Pin",
      meaning:
        "The image of a safety pin, representing fastening, securing, or a practical, utilitarian tool.",
    },
    {
      id: "fac87f0e-9bbe-4d14-981b-ae75d1f28d60",
      emoji: "🧼",
      name: "Soap",
      meaning:
        "The image of a bar of soap, representing cleanliness, hygiene, or the act of washing.",
    },
    {
      id: "fb0425ef-1cea-4c46-ae5e-0ce7aa1a9532",
      emoji: "🧽",
      name: "Sponge",
      meaning:
        "The image of a cleaning sponge, representing the tools used for scrubbing and cleaning.",
    },
    {
      id: "fb2efe70-0f22-4524-955f-c70969a22a4e",
      emoji: "🧯",
      name: "Fire Extinguisher",
      meaning:
        "The image of a fire extinguisher, representing safety, emergency preparedness, or the need to put out a fire.",
    },
    {
      id: "1a84d0c9-79e5-4ff5-9712-b1e964a1c01c",
      emoji: "🚿",
      name: "Shower",
      meaning:
        "The image of a shower head, representing the act of bathing, cleansing, or refreshing oneself.",
    },
    {
      id: "1c6d0bf6-cde3-4c5e-a5c9-c599c1cae4a8",
      emoji: "🛌",
      name: "Bed",
      meaning:
        "The image of a bed, representing sleep, rest, or the comfort of a personal sleeping space.",
    },
  ];
  const emoji2 = [
    {
      id: "0001",
      emoji: "😀",
      name: "Grinning Face",
      meaning: "A happy, smiling face.",
    },
    {
      id: "0002",
      emoji: "🙂",
      name: "Slightly Smiling Face",
      meaning: "A face showing a slight smile.",
    },
    {
      id: "0003",
      emoji: "🚅",
      name: "Bullet Train",
      meaning:
        "A high-speed rail vehicle known for its sleek, aerodynamic design and rapid transit capabilities.",
    },
    {
      id: "0005",
      emoji: "🚂",
      name: "Locomotive",
      meaning:
        "The image of a locomotive, the powerful engine that pulls a train, representing the driving force behind rail transportation.",
    },
    {
      id: "0007",
      emoji: "🛬",
      name: "Airplane Arrival",
      meaning:
        "The image of an airplane landing, representing the completion of an air travel journey or the arrival at a destination.",
    },
    {
      id: "1db5d60a-cbe6-4c80-a5ab-9f71f42a1f33",
      emoji: "🚈",
      name: "Light Rail",
      meaning:
        "The image of a light rail or streetcar, representing a form of urban public transportation, often running on tracks or dedicated lanes.",
    },
    {
      id: "2d8a9c99-7440-4be1-a7a0-a36ab37ba59e",
      emoji: "🛫",
      name: "Airplane Departure",
      meaning:
        "The image of an airplane taking off, representing air travel, the start of a journey, or the departure process.",
    },
    {
      id: "2e236fca-738b-4909-8ce4-35b87eff6788",
      emoji: "🌞",
      name: "Sun with Face",
      meaning:
        "A sun with a face, representing happiness, joy, or a positive outlook.",
    },
    {
      id: "2f1d82ed-7c14-4d08-a9d1-6d2bef5803c9",
      emoji: "🏭",
      name: "Factory",
      meaning:
        "The image of a factory or industrial building, representing a place of manufacturing, production, or industrial activity.",
    },
    {
      id: "37db1e44-55fe-4d4e-872f-0a5a1b01ddf7",
      emoji: "🕍",
      name: "Synagogue",
      meaning:
        "The image of a synagogue, representing a place of worship in the Jewish faith, often featuring distinctive architectural elements.",
    },
    {
      id: "3d0e1fdd-5750-4e7e-93a5-c7d2f60d52af",
      emoji: "🏭",
      name: "Department Store",
      meaning:
        "The image of a department store, representing a large retail establishment offering a wide variety of merchandise and goods.",
    },
    {
      id: "4a2a7e8a-a6cd-438f-9fcc-4ba4650d63bc",
      emoji: "🏰",
      name: "Castle",
      meaning:
        "The image of a castle, representing a historical or fictional fortified structure, often associated with royalty or medieval times.",
    },
    {
      id: "4f8d3a29-7c14-4d08-a9d1-6d2bef5803c9",
      emoji: "🏦",
      name: "Bank",
      meaning:
        "The image of a bank building, representing a financial institution that provides services such as deposits, loans, and investments.",
    },
    {
      id: "57f71f5d-7c60-4d4a-96a3-a09d9d1d69ab",
      emoji: "🗼",
      name: "Tokyo Tower",
      meaning:
        "The image of the Tokyo Tower, a famous landmark in Japan, representing a iconic structure or tourist attraction.",
    },
    {
      id: "64ade2d0-d59f-46f5-8f22-a11a44b56d96",
      emoji: "🕋",
      name: "Kaaba",
      meaning:
        "The image of the Kaaba, a sacred cubic structure in Mecca, Islam's holiest site, representing the center of the Islamic faith.",
    },
    {
      id: "6906d3ad-fab8-4fca-9c15-d40f0bab5fec",
      emoji: "🕍",
      name: "Synagogue",
      meaning:
        "The image of a synagogue, representing a place of worship in the Jewish faith, often featuring distinctive architectural elements.",
    },
    {
      id: "6d19ab5e-5ef0-4d31-8eaf-62b3a8ca619e",
      emoji: "🕉",
      name: "Om",
      meaning:
        "The image of the Om symbol, representing the sacred sound and spiritual symbol in Hinduism and other Eastern religions.",
    },
    {
      id: "70db2b2f-a247-4daa-ab95-08d9b855e162",
      emoji: "🕌",
      name: "Atom Symbol",
      meaning:
        "The image of the atom symbol, representing science, technology, or the fundamental building blocks of matter.",
    },
    {
      id: "75d8a03c-55fe-4d3f-86bd-5eaf75edaa91",
      emoji: "✡",
      name: "Star of David",
      meaning:
        "The image of the Star of David, a hexagram symbol, representing the Jewish faith and the Jewish people.",
    },
    {
      id: "7d19ab5e-5ef0-4d31-8eaf-62b3a8ca619e",
      emoji: "🕉",
      name: "Om",
      meaning:
        "The image of the Om symbol, representing the sacred sound and spiritual symbol in Hinduism and other Eastern religions.",
    },
    {
      id: "808afe97-9d89-4c99-abb1-f1ce93b7d9f1",
      emoji: "✡",
      name: "Star of David",
      meaning:
        "The image of the Star of David, a hexagram symbol, representing the Jewish faith and the Jewish people.",
    },
    {
      id: "83b47b14-93c0-4d3f-86bd-5eaf75edaa91",
      emoji: "🕉",
      name: "Om",
      meaning:
        "The image of the Om symbol, representing the sacred sound and spiritual symbol in Hinduism and other Eastern religions.",
    },
    {
      id: "8a22a7ba-cf5c-4fa8-be1a-0d4d6ab298da",
      emoji: "🌞",
      name: "Sun with Face",
      meaning:
        "A sun with a face, representing happiness, joy, or a positive outlook.",
    },
    {
      id: "93c04fa8-be1a-0d4d6ab298da",
      emoji: "🌞",
      name: "Sun with Face",
      meaning:
        "A sun with a face, representing happiness, joy, or a positive outlook.",
    },
    {
      id: "a22a7ba-cf5c-4fa8-be1a-0d4d6ab298da",
      emoji: "🌞",
      name: "Sun with Face",
      meaning:
        "A sun with a face, representing happiness, joy, or a positive outlook.",
    },
    {
      id: "a5b6c7d-e8f9-g0h1-i5j6-k7l8-m9n0p1q2r3",
      emoji: "🌞",
      name: "Sun with Face",
      meaning:
        "A sun with a face, representing happiness, joy, or a positive outlook.",
    },
    {
      id: "b5e1fdd-5750-4e7e-93a5-c7d2f60d52af",
      emoji: "🏭",
      name: "Department Store",
      meaning:
        "The image of a department store, representing a large retail establishment offering a wide variety of merchandise and goods.",
    },
    {
      id: "c0d1e2f-g3h4-i5j6-k7l8-m9n0p1q2r3",
      emoji: "🌞",
      name: "Sun with Face",
      meaning:
        "A sun with a face, representing happiness, joy, or a positive outlook.",
    },
    {
      id: "d5e6f7g-h8i9-k8l9-m0n1-o2p3q4r5s6",
      emoji: "🌞",
      name: "Sun with Face",
      meaning:
        "A sun with a face, representing happiness, joy, or a positive outlook.",
    },
    {
      id: "e3f4g5h-i6j7-k8l9-m0n1-o2p3q4r5s6",
      emoji: "🌞",
      name: "Sun with Face",
      meaning:
        "A sun with a face, representing happiness, joy, or a positive outlook.",
    },
    {
      id: "f1ce93b7-d9f1-4c99-abb1-f1ce93b7d9f1",
      emoji: "🌞",
      name: "Sun with Face",
      meaning:
        "A sun with a face, representing happiness, joy, or a positive outlook.",
    },
  ];
  const emoji3 = [
    {
      id: "s4t5u6v-w7x8-y9z0-a1b2-c3d4e5f6g7",
      emoji: "🇺🇸",
      name: "United States Flag",
      meaning:
        "The image of the flag of the United States of America, representing the country, its people, and its national identity.",
    },
    {
      id: "h8i9j0k-l1m2-n3o4-p5q6-r7s8t9u0v1",
      emoji: "🇬🇧",
      name: "United Kingdom Flag",
      meaning:
        "The image of the flag of the United Kingdom, representing the country, its people, and its national identity.",
    },
    {
      id: "w2x3y4z-a5b6-c7d8-e9f0-g1h2i3j4k5",
      emoji: "🇫🇷",
      name: "France Flag",
      meaning:
        "The image of the flag of France, representing the country, its people, and its national identity.",
    },
    {
      id: "l6m7n8o-p9q0-r1s2-t3u4-v5w6x7y8z9",
      emoji: "🇩🇪",
      name: "Germany Flag",
      meaning:
        "The image of the flag of Germany, representing the country, its people, and its national identity.",
    },
    {
      id: "a5b6c7d-e8f9-g0h1-i2j3-k4l5m6n7o8",
      emoji: "🇮🇹",
      name: "Italy Flag",
      meaning:
        "The image of the flag of Italy, representing the country, its people, and its national identity.",
    },
    {
      id: "r5s6t7u-v8w9-x0y1-z2a3-b4c5d6e7f8",
      emoji: "🇨🇳",
      name: "China Flag",
      meaning:
        "The image of the flag of China, representing the country, its people, and its national identity.",
    },
    {
      id: "g9h0i1j-k2l3-m4n5-o6p7-q8r9s0t1u2",
      emoji: "🇯🇵",
      name: "Japan Flag",
      meaning:
        "The image of the flag of Japan, representing the country, its people, and its national identity.",
    },
    {
      id: "t3u4v5w-x6y7-z8a9-b0c1-d2e3f4g5h6",
      emoji: "🇷🇺",
      name: "Russia Flag",
      meaning:
        "The image of the flag of Russia, representing the country, its people, and its national identity.",
    },
    {
      id: "u1v2w3x-y4z5-a6b7-c8d9-e0f1g2h3i4",
      emoji: "🇮🇳",
      name: "India Flag",
      meaning:
        "The image of the flag of India, representing the country, its people, and its national identity.",
    },
    {
      id: "j5k6l7m-n8o9-p0q1-r2s3-t4u5v6w7x8",
      emoji: "🇧🇷",
      name: "Brazil Flag",
      meaning:
        "The image of the flag of Brazil, representing the country, its people, and its national identity.",
    },
  ];
  const emoji4 = [
    {
      id: "p9q0r1s2-t3u4-v5w6x7y8z9-a0b1c2d3e4",
      emoji: "🕐",
      name: "Clock Emoji",
      meaning: "A clock emoji representing time.",
    },
    {
      id: "f1ce93b7-d9f1-4c99-abb1-f1ce93b7d9f1",
      emoji: "🌸",
      name: "Flower",
      meaning: "A beautiful flower.",
    },
    {
      id: "s4t5u6v-w7x8-y9z0-a1b2-c3d4e5f6g7",
      emoji: "🌹",
      name: "Rose",
      meaning: "A beautiful rose.",
    },
    {
      id: "h8i9j0k-l1m2-n3o4-p5q6-r7s8t9u0v1",
      emoji: "🌺",
      name: "Cherry Blossom",
      meaning: "A beautiful cherry blossom.",
    },
    {
      id: "w2x3y4z-a5b6-c7d8-e9f0-g1h2i3j4k5",
      emoji: "🌻",
      name: "Tulip",
      meaning: "A beautiful tulip.",
    },
    {
      id: "l6m7n8o-p9q0-r1s2-t3u4-v5w6x7y8z9",
      emoji: "🌼",
      name: "Blossom",
      meaning: "A beautiful blossom.",
    },
    {
      id: "a5b6c7d-e8f9-g0h1-i2j3-k4l5m6n7o8",
      emoji: "🌷",
      name: "Sunflower",
      meaning: "A beautiful sunflower.",
    },
    {
      id: "r5s6t7u-v8w9-x0y1-z2a3-b4c5d6e7f8",
      emoji: "🌾",
      name: "Field of Flowers",
      meaning: "A field of beautiful flowers.",
    },
    {
      id: "g9h0i1j-k2l3-m4n5-o6p7-q8r9s0t1u2",
      emoji: "🌿",
      name: "Forest",
      meaning: "A beautiful forest.",
    },
    {
      id: "t3u4v5w-x6y7-z8a9-b0c1-d2e3f4g5h6",
      emoji: "🌞",
      name: "Sun with Face",
      meaning:
        "A sun with a face, representing happiness, joy, or a positive outlook.",
    },
  ];
const emojiData = [...emoji, ...emoji1, ...emoji2, ...emoji3,...emoji4];
  return (
    <>
      <h1 className="heading">Emoji Wikipedia</h1>
      <div className="maindiv">
        {emojiData.map((element) => (
          <Card
            key={element.id}
            emoji={element.emoji}
            name={element.name}
            description={element.meaning}
          />
        ))}
      </div>
    </>
  );
}

export default App;
