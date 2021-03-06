import React, { createContext, useContext, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { UtilitiesContext } from "./utilities.context";
import { BirthChartContext } from "./birthchart.context";
import { TIME_API_KEY } from "./../config";
// import cloneDeep from 'lodash.cloneDeep'

//we provide empty fn as defaults so it doesn't break the app if forget to pass a fn
export const PlayersContext = createContext({
  addPlayer: () => {},
  createBirthChartURL: () => {},
  fetchBirthChart: () => {},
  deletePlayer: () => {},
  deleteAllPlayers: () => {},
  error: null,
  players: [],
  loaded: false,
  loading: false,
});

export const PlayersProvider = (props) => {
  const [players, setPlayers] = useState([
    {
      location: "leeds",
      firstName: "Robert",
      lastName: "De Niro",
      email: "rob@rob.com",
      datetime: "1967-12-09T17:25",
      utcoffset: 1,
      latitude: 53.8007554,
      longitude: -1.5490774,
      _id: "d1e4b",
      chart: {
        birthday: "1967/12/09",
        time: "1725",
        latitude: 53.8007554,
        longitude: -1.5490774,
        ownerName: "Robert De Niro",
        image: null,
        Sun: {
          sign: "Sagittarius",
          icon:
            '<path d="M104.72,213.24c-25.82,25.88-51,51.12-76.18,76.35C19.12,299,12.39,300.41,6.06,294.3-.48,288,.92,281,10.74,271.22q34.71-34.73,69.5-69.38c2.05-2,4.89-3.28,7.9-5.25L33.75,142.4c-1.13-1.12-2.34-2.18-3.39-3.38-5.22-5.86-5.18-13.64.05-18.58s12.83-4.68,18.58,1q24.67,24.44,49.1,49.13a75.82,75.82,0,0,1,5.15,6.27L252.79,27.29c-2-.15-4.2-.47-6.4-.47q-43.9,0-87.81.13c-8.58,0-14.16-5.16-14-12.84.2-7.37,5.75-12.23,13.83-12.26q60.67-.23,121.33-.49C295.36,1.3,299,5,299,20.61q-.15,60.68-.3,121.34c0,8.67-5.07,14.18-12.77,14.06s-12.51-5.87-12.51-14.47c0-31.38,0-62.75,0-92.88L124.74,197.3c10.81,10.77,23.24,23.15,35.65,35.53,5.28,5.26,10.59,10.49,15.8,15.81,7,7.18,7.71,14.66,2,20.26s-13.08,4.79-20.26-2.36C140.4,249.07,123,231.53,104.72,213.24Z" transform="translate(-2.05 -1.36)"/>',
          location: { x: 515, y: -190 },
          word:
            '<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">\n    Sag\n  </text>',
          wordLocation: { x: 450, y: -260 },
          viewBox: "-500 60 600 600",
          textAnchor: "end",
          called: false,
        },
        Mercury: {
          sign: "Sagittarius",
          icon:
            '<path d="M104.72,213.24c-25.82,25.88-51,51.12-76.18,76.35C19.12,299,12.39,300.41,6.06,294.3-.48,288,.92,281,10.74,271.22q34.71-34.73,69.5-69.38c2.05-2,4.89-3.28,7.9-5.25L33.75,142.4c-1.13-1.12-2.34-2.18-3.39-3.38-5.22-5.86-5.18-13.64.05-18.58s12.83-4.68,18.58,1q24.67,24.44,49.1,49.13a75.82,75.82,0,0,1,5.15,6.27L252.79,27.29c-2-.15-4.2-.47-6.4-.47q-43.9,0-87.81.13c-8.58,0-14.16-5.16-14-12.84.2-7.37,5.75-12.23,13.83-12.26q60.67-.23,121.33-.49C295.36,1.3,299,5,299,20.61q-.15,60.68-.3,121.34c0,8.67-5.07,14.18-12.77,14.06s-12.51-5.87-12.51-14.47c0-31.38,0-62.75,0-92.88L124.74,197.3c10.81,10.77,23.24,23.15,35.65,35.53,5.28,5.26,10.59,10.49,15.8,15.81,7,7.18,7.71,14.66,2,20.26s-13.08,4.79-20.26-2.36C140.4,249.07,123,231.53,104.72,213.24Z" transform="translate(-2.05 -1.36)"/>',
          location: { x: 590, y: -140 },
          word:
            '<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">\n    Sag\n  </text>',
          wordLocation: { x: 630, y: -120 },
          viewBox: "-500 60 600 600",
          textAnchor: "end",
          called: false,
        },
        Venus: {
          sign: "Scorpio",
          icon:
            '<path d="M205.17,300c-6-3.55-12.16-6.73-17.88-10.72-12.51-8.72-17.76-22.73-21.56-37.69-5.9-23.19-8.27-47-9.88-70.89-2.9-43.08-1.46-86.19-.73-129.29.06-3.93-1.18-5.13-4.39-6.24-10.24-3.55-20.36-5.54-30.87-1.32C117,45,115.71,46.44,115.73,50c.26,54.22.37,108.44.65,162.67A12,12,0,0,0,118.5,219c3.34,4.9,7,9.52,11,14.73-11.14,6.39-18.25,16.2-22,29.82-7.64-6.61-14.71-12.69-21.75-18.83-8.43-7.36-8.66-7.52-3.7-17.78a48.67,48.67,0,0,0,4.76-22.32c-.27-51-.19-101.9-.23-152.84v-7c-12.66-2.24-25-5-36,4.81a10.24,10.24,0,0,0-3,6.67q.06,80.24.54,160.48a14.92,14.92,0,0,0,1.54,6.11c2.69,5.59,5.64,11,8.79,17.1-10.19,6.21-16.35,16.16-21.7,27.49-1.17-1-2.21-1.71-3.1-2.62-6.54-6.65-13-13.42-19.63-20-2.12-2.09-3.21-3.89-1.43-6.87,7.51-12.58,8.06-26.59,8-41.19-.36-46.94-.05-93.88,0-140.83V49.57L0,45C6.17,33.45,12,22.47,18.1,11.12c10,5.79,21.14,9.56,33.51,8.17l-2.5,15.36,1,.71A60.06,60.06,0,0,0,55,29.06c3.76-6.39,7.22-13,11-19.36.8-1.35,2.79-3.11,3.81-2.82a97.08,97.08,0,0,0,41.25,2.2V28.47l1.15.32L127.14,4C137.21,5.85,147,8.36,156.86,9.26s20,.2,30.34.2c-.63,6.81-1.73,14.29-1.95,21.79-.94,32.16-2.36,64.33-2.13,96.48.17,22.3,2.24,44.63,4.36,66.84,2,20.56,5.14,41,12.75,60.15a63.78,63.78,0,0,0,7.51,13.94c6.75,9.24,15.17,10.91,23.88,3.85a93,93,0,0,0,16.81-18.17c5.76-8.09,10.33-17.23,15.36-26a8.15,8.15,0,0,0,1-4.82L232.07,246.3c-.48-4-.37-7.55-1.39-10.65-3.13-9.49,1.2-14.13,7.92-19,20.71-15.11,41-31,61.4-46.54v88.44l-18.39,11.71V230.58a18.76,18.76,0,0,0-4.59,6c-10.34,18.54-20.58,37.28-36.42,50.85-5.91,5.07-13,8.41-19.62,12.53Z" transform="translate(0 -4)"/>',
          location: { x: 635, y: -65 },
          word:
            '<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">\n    Sco\n  </text>',
          wordLocation: { x: 700, y: 30 },
          viewBox: "-500 60 600 600",
          textAnchor: "end",
          called: false,
        },
        Mars: {
          sign: "Aquarius",
          icon:
            '<path d="M271.07,50.34,300,118.12l-18.43,8.12L262.05,79.93l-70.83,46.29c-6.56-15.43-13.06-30.69-19.7-46.29l-70,46.29c-6.58-15.5-13-30.72-19.63-46.29L11.09,126.25.15,110,90.63,50.34l20,46.3L181,50.35l19.69,46.29Z" transform="translate(0 -50.34)"/><path d="M10.91,251,0,234.71l90.46-59.6c6.66,15.42,13.23,30.66,20,46.29l70.38-46.28c6.59,15.48,13.08,30.75,19.69,46.29l70.39-46.3c9.67,22.64,19.25,45.09,28.94,67.77L281.41,251,261.94,204.7,191.22,251l-19.7-46.29-70,46.29c-6.6-15.42-13.13-30.69-19.8-46.29Z" transform="translate(0 -50.34)"/>',
          location: { x: 650, y: 30 },
          word:
            '<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">\n    Aqu\n  </text>',
          wordLocation: { x: 675, y: 260 },
          viewBox: "-500 60 600 600",
          textAnchor: "end",
          called: false,
        },
        Jupiter: {
          sign: "Virgo",
          icon:
            '<path d="M219.61,99.83a25.89,25.89,0,0,1,8.79-6.31c5.06-2,10.06-1.55,15,.47,6.12,2.5,10.94,6.72,15.11,11.72,7,8.42,11.49,18.15,14.48,28.61a100.44,100.44,0,0,1,3.67,21.14,160.54,160.54,0,0,1-6.38,57.4,109.69,109.69,0,0,1-19,37c-.17.21-.32.43-.54.73a238.42,238.42,0,0,0,37.12,30.19c-4.21,6.41-8.39,12.77-12.62,19.23a261,261,0,0,1-41.07-33.43c-21.32,15.72-45.73,20.93-71.76,21.15-.19-7.68-.38-15.29-.57-23,15.15-.08,29.84-2,43.76-8a71.8,71.8,0,0,0,13.28-7.49c-.28-.4-.53-.77-.79-1.12a118.6,118.6,0,0,1-15.57-26.88,76.08,76.08,0,0,1-5.41-21.08c-.29-3-.46-6.12-.46-9.18q0-57.37,0-114.75a25.87,25.87,0,0,0-2.28-10,129.6,129.6,0,0,0-24.21-38.41c-1.06-1.16-2.26-2.18-3.41-3.26-.24-.23-.53-.42-1-.8-1.9,2-3.94,3.86-5.67,6a107.33,107.33,0,0,0-18.7,33.68,40.3,40.3,0,0,0-2.27,13.18q.06,76,0,152.05v1.53h-23v-1.4q0-75.45,0-150.89a34.42,34.42,0,0,0-2-11.94,126.5,126.5,0,0,0-21.27-38c-1-1.21-2.17-2.27-3.22-3.44a.89.89,0,0,0-1.52,0c-3,3-6.22,5.84-9,9.07a109.24,109.24,0,0,0-16.39,26.1,45.59,45.59,0,0,0-4.07,13.24,24.67,24.67,0,0,0-.17,3.1c0,1.68,0,3.37,0,5.06q0,73.89,0,147.79v1.4h-23V81.24c0-11.75-1.51-23.25-5.51-34.34A74.23,74.23,0,0,0,15.79,22.16c-1.17-1.31-2.5-2.48-3.85-3.8L27.05,1A77.07,77.07,0,0,1,40.43,16.5,100.3,100.3,0,0,1,50,34.56c.28-.4.49-.7.69-1A124.19,124.19,0,0,1,69.13,10.4C72.91,6.79,77,3.53,81.88,1.52A18.52,18.52,0,0,1,99.06,2.84a42.16,42.16,0,0,1,10.24,8.82c6.87,7.76,12.33,16.5,17.25,25.59.15.27.29.53.53,1,.36-.67.66-1.23,1-1.79a116.55,116.55,0,0,1,18.08-25.69,38.17,38.17,0,0,1,12.07-9c6-2.64,11.77-2.1,17.41,1a43.35,43.35,0,0,1,10.69,8.64,151.58,151.58,0,0,1,29.5,46.42A47.3,47.3,0,0,1,219.65,77c-.18,7.09,0,14.19,0,21.29ZM236,116c-1,1.35-2,2.61-2.82,4A94.08,94.08,0,0,0,223,142.9c-1.89,6.13-3.37,12.36-3.39,18.83,0,10.09,0,20.18,0,30.27a51,51,0,0,0,1.72,13.07,78.83,78.83,0,0,0,10.91,23.19c1,1.49,2,3,3.16,4.6,1.5-2.38,3-4.54,4.27-6.79,6.51-11.21,10.23-23.38,12.37-36.1a155.44,155.44,0,0,0,2-22.9,95.48,95.48,0,0,0-2-21.6A60.73,60.73,0,0,0,242.77,123,26.07,26.07,0,0,0,236,116Z" transform="translate(-11.94 0)"/>',
          location: { x: 600, y: 100 },
          word:
            '<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">\n    Vir\n  </text>',
          wordLocation: { x: 550, y: 420 },
          viewBox: "-500 60 600 600",
          textAnchor: "end",
          called: false,
        },
        Saturn: {
          sign: "Aries",
          icon:
            '\t<path d="M243.46,123.91c0-4.75-.41-8.92.2-12.93.24-1.54,2.59-3.29,4.36-4,9.66-3.78,18.2-9,24.28-17.64,14.17-20.26,3.17-49.18-20.11-52.75-20.42-3.14-41.09,9.48-49.68,30.12C190.78,94.9,184,124.48,179,154.35,171,202.08,164.25,250,157,297.87a21.82,21.82,0,0,1-.57,2.13H142.54c-1.7-13-3.33-25.94-5.12-38.87-7.51-54.27-15.18-108.53-29.28-161.57A205.72,205.72,0,0,0,93.69,60.45C84.59,42.27,62.93,33,45,37.16,20,43,15.82,72.84,27.14,89.27c5.8,8.42,13.92,13.88,23.36,17.12C55.06,108,57,110,56.37,114.78c-.39,2.82-.07,5.73-.07,8.66C28.56,120.7,3.85,100,.62,71.09-1.47,52.42,1.44,35,13.37,19.87,29.63-.81,55-4.47,76.83,4.84c26.67,11.38,41.51,33.4,47.92,60.49,6.21,26.26,10.56,53,14.55,79.73,4.11,27.51,6.8,55.24,10.64,83,1.35-11.76,2.64-23.53,4.07-35.29,5.18-42.75,9.52-85.65,20.65-127.41,6.08-22.79,17.34-42.5,38-55.31,38.77-24,82.15-2.17,86.52,41,2.11,20.78-2.16,39.42-17.26,54.66C271.56,116.1,258.66,121.28,243.46,123.91Z" transform="translate(0)"/>',
          location: { x: 515, y: 140 },
          word:
            '<text transform="rotate(88.854 -12.926 30.334)" font-size="252.05" font-family="WolpePegasus-Regular">\n    Ari\n  </text>',
          wordLocation: { x: 530, y: 495 },
          viewBox: "-100 60 600 600",
          textAnchor: "end",
          called: false,
        },
        Uranus: {
          sign: "Virgo",
          icon:
            '<path d="M219.61,99.83a25.89,25.89,0,0,1,8.79-6.31c5.06-2,10.06-1.55,15,.47,6.12,2.5,10.94,6.72,15.11,11.72,7,8.42,11.49,18.15,14.48,28.61a100.44,100.44,0,0,1,3.67,21.14,160.54,160.54,0,0,1-6.38,57.4,109.69,109.69,0,0,1-19,37c-.17.21-.32.43-.54.73a238.42,238.42,0,0,0,37.12,30.19c-4.21,6.41-8.39,12.77-12.62,19.23a261,261,0,0,1-41.07-33.43c-21.32,15.72-45.73,20.93-71.76,21.15-.19-7.68-.38-15.29-.57-23,15.15-.08,29.84-2,43.76-8a71.8,71.8,0,0,0,13.28-7.49c-.28-.4-.53-.77-.79-1.12a118.6,118.6,0,0,1-15.57-26.88,76.08,76.08,0,0,1-5.41-21.08c-.29-3-.46-6.12-.46-9.18q0-57.37,0-114.75a25.87,25.87,0,0,0-2.28-10,129.6,129.6,0,0,0-24.21-38.41c-1.06-1.16-2.26-2.18-3.41-3.26-.24-.23-.53-.42-1-.8-1.9,2-3.94,3.86-5.67,6a107.33,107.33,0,0,0-18.7,33.68,40.3,40.3,0,0,0-2.27,13.18q.06,76,0,152.05v1.53h-23v-1.4q0-75.45,0-150.89a34.42,34.42,0,0,0-2-11.94,126.5,126.5,0,0,0-21.27-38c-1-1.21-2.17-2.27-3.22-3.44a.89.89,0,0,0-1.52,0c-3,3-6.22,5.84-9,9.07a109.24,109.24,0,0,0-16.39,26.1,45.59,45.59,0,0,0-4.07,13.24,24.67,24.67,0,0,0-.17,3.1c0,1.68,0,3.37,0,5.06q0,73.89,0,147.79v1.4h-23V81.24c0-11.75-1.51-23.25-5.51-34.34A74.23,74.23,0,0,0,15.79,22.16c-1.17-1.31-2.5-2.48-3.85-3.8L27.05,1A77.07,77.07,0,0,1,40.43,16.5,100.3,100.3,0,0,1,50,34.56c.28-.4.49-.7.69-1A124.19,124.19,0,0,1,69.13,10.4C72.91,6.79,77,3.53,81.88,1.52A18.52,18.52,0,0,1,99.06,2.84a42.16,42.16,0,0,1,10.24,8.82c6.87,7.76,12.33,16.5,17.25,25.59.15.27.29.53.53,1,.36-.67.66-1.23,1-1.79a116.55,116.55,0,0,1,18.08-25.69,38.17,38.17,0,0,1,12.07-9c6-2.64,11.77-2.1,17.41,1a43.35,43.35,0,0,1,10.69,8.64,151.58,151.58,0,0,1,29.5,46.42A47.3,47.3,0,0,1,219.65,77c-.18,7.09,0,14.19,0,21.29ZM236,116c-1,1.35-2,2.61-2.82,4A94.08,94.08,0,0,0,223,142.9c-1.89,6.13-3.37,12.36-3.39,18.83,0,10.09,0,20.18,0,30.27a51,51,0,0,0,1.72,13.07,78.83,78.83,0,0,0,10.91,23.19c1,1.49,2,3,3.16,4.6,1.5-2.38,3-4.54,4.27-6.79,6.51-11.21,10.23-23.38,12.37-36.1a155.44,155.44,0,0,0,2-22.9,95.48,95.48,0,0,0-2-21.6A60.73,60.73,0,0,0,242.77,123,26.07,26.07,0,0,0,236,116Z" transform="translate(-11.94 0)"/>',
          location: { x: 430, y: 140 },
          word:
            '<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">\n    Vir\n  </text>',
          wordLocation: { x: 340, y: 490 },
          viewBox: "-150 60 600 600",
          called: false,
        },
        Neptune: {
          sign: "Scorpio",
          icon:
            '<path d="M205.17,300c-6-3.55-12.16-6.73-17.88-10.72-12.51-8.72-17.76-22.73-21.56-37.69-5.9-23.19-8.27-47-9.88-70.89-2.9-43.08-1.46-86.19-.73-129.29.06-3.93-1.18-5.13-4.39-6.24-10.24-3.55-20.36-5.54-30.87-1.32C117,45,115.71,46.44,115.73,50c.26,54.22.37,108.44.65,162.67A12,12,0,0,0,118.5,219c3.34,4.9,7,9.52,11,14.73-11.14,6.39-18.25,16.2-22,29.82-7.64-6.61-14.71-12.69-21.75-18.83-8.43-7.36-8.66-7.52-3.7-17.78a48.67,48.67,0,0,0,4.76-22.32c-.27-51-.19-101.9-.23-152.84v-7c-12.66-2.24-25-5-36,4.81a10.24,10.24,0,0,0-3,6.67q.06,80.24.54,160.48a14.92,14.92,0,0,0,1.54,6.11c2.69,5.59,5.64,11,8.79,17.1-10.19,6.21-16.35,16.16-21.7,27.49-1.17-1-2.21-1.71-3.1-2.62-6.54-6.65-13-13.42-19.63-20-2.12-2.09-3.21-3.89-1.43-6.87,7.51-12.58,8.06-26.59,8-41.19-.36-46.94-.05-93.88,0-140.83V49.57L0,45C6.17,33.45,12,22.47,18.1,11.12c10,5.79,21.14,9.56,33.51,8.17l-2.5,15.36,1,.71A60.06,60.06,0,0,0,55,29.06c3.76-6.39,7.22-13,11-19.36.8-1.35,2.79-3.11,3.81-2.82a97.08,97.08,0,0,0,41.25,2.2V28.47l1.15.32L127.14,4C137.21,5.85,147,8.36,156.86,9.26s20,.2,30.34.2c-.63,6.81-1.73,14.29-1.95,21.79-.94,32.16-2.36,64.33-2.13,96.48.17,22.3,2.24,44.63,4.36,66.84,2,20.56,5.14,41,12.75,60.15a63.78,63.78,0,0,0,7.51,13.94c6.75,9.24,15.17,10.91,23.88,3.85a93,93,0,0,0,16.81-18.17c5.76-8.09,10.33-17.23,15.36-26a8.15,8.15,0,0,0,1-4.82L232.07,246.3c-.48-4-.37-7.55-1.39-10.65-3.13-9.49,1.2-14.13,7.92-19,20.71-15.11,41-31,61.4-46.54v88.44l-18.39,11.71V230.58a18.76,18.76,0,0,0-4.59,6c-10.34,18.54-20.58,37.28-36.42,50.85-5.91,5.07-13,8.41-19.62,12.53Z" transform="translate(0 -4)"/>',
          location: { x: 340, y: 90 },
          word:
            '<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">\n    Sco\n  </text>',
          wordLocation: { x: 190, y: 395 },
          viewBox: "-100 60 600 600",
          called: false,
        },
        Pluto: {
          sign: "Virgo",
          icon:
            '<path d="M219.61,99.83a25.89,25.89,0,0,1,8.79-6.31c5.06-2,10.06-1.55,15,.47,6.12,2.5,10.94,6.72,15.11,11.72,7,8.42,11.49,18.15,14.48,28.61a100.44,100.44,0,0,1,3.67,21.14,160.54,160.54,0,0,1-6.38,57.4,109.69,109.69,0,0,1-19,37c-.17.21-.32.43-.54.73a238.42,238.42,0,0,0,37.12,30.19c-4.21,6.41-8.39,12.77-12.62,19.23a261,261,0,0,1-41.07-33.43c-21.32,15.72-45.73,20.93-71.76,21.15-.19-7.68-.38-15.29-.57-23,15.15-.08,29.84-2,43.76-8a71.8,71.8,0,0,0,13.28-7.49c-.28-.4-.53-.77-.79-1.12a118.6,118.6,0,0,1-15.57-26.88,76.08,76.08,0,0,1-5.41-21.08c-.29-3-.46-6.12-.46-9.18q0-57.37,0-114.75a25.87,25.87,0,0,0-2.28-10,129.6,129.6,0,0,0-24.21-38.41c-1.06-1.16-2.26-2.18-3.41-3.26-.24-.23-.53-.42-1-.8-1.9,2-3.94,3.86-5.67,6a107.33,107.33,0,0,0-18.7,33.68,40.3,40.3,0,0,0-2.27,13.18q.06,76,0,152.05v1.53h-23v-1.4q0-75.45,0-150.89a34.42,34.42,0,0,0-2-11.94,126.5,126.5,0,0,0-21.27-38c-1-1.21-2.17-2.27-3.22-3.44a.89.89,0,0,0-1.52,0c-3,3-6.22,5.84-9,9.07a109.24,109.24,0,0,0-16.39,26.1,45.59,45.59,0,0,0-4.07,13.24,24.67,24.67,0,0,0-.17,3.1c0,1.68,0,3.37,0,5.06q0,73.89,0,147.79v1.4h-23V81.24c0-11.75-1.51-23.25-5.51-34.34A74.23,74.23,0,0,0,15.79,22.16c-1.17-1.31-2.5-2.48-3.85-3.8L27.05,1A77.07,77.07,0,0,1,40.43,16.5,100.3,100.3,0,0,1,50,34.56c.28-.4.49-.7.69-1A124.19,124.19,0,0,1,69.13,10.4C72.91,6.79,77,3.53,81.88,1.52A18.52,18.52,0,0,1,99.06,2.84a42.16,42.16,0,0,1,10.24,8.82c6.87,7.76,12.33,16.5,17.25,25.59.15.27.29.53.53,1,.36-.67.66-1.23,1-1.79a116.55,116.55,0,0,1,18.08-25.69,38.17,38.17,0,0,1,12.07-9c6-2.64,11.77-2.1,17.41,1a43.35,43.35,0,0,1,10.69,8.64,151.58,151.58,0,0,1,29.5,46.42A47.3,47.3,0,0,1,219.65,77c-.18,7.09,0,14.19,0,21.29ZM236,116c-1,1.35-2,2.61-2.82,4A94.08,94.08,0,0,0,223,142.9c-1.89,6.13-3.37,12.36-3.39,18.83,0,10.09,0,20.18,0,30.27a51,51,0,0,0,1.72,13.07,78.83,78.83,0,0,0,10.91,23.19c1,1.49,2,3,3.16,4.6,1.5-2.38,3-4.54,4.27-6.79,6.51-11.21,10.23-23.38,12.37-36.1a155.44,155.44,0,0,0,2-22.9,95.48,95.48,0,0,0-2-21.6A60.73,60.73,0,0,0,242.77,123,26.07,26.07,0,0,0,236,116Z" transform="translate(-11.94 0)"/>',
          location: { x: 285, y: 15 },
          word:
            '<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">\n    Vir\n  </text>',
          wordLocation: { x: 95, y: 245 },
          viewBox: "-100 60 600 600",
          called: false,
        },
        Ascendant: {
          sign: "Gemini",
          icon:
            '<path d="M300,284.44,288.22,299c-91.55-72.44-183.1-72.92-274.78,0L1.65,284.45c22.31-16.11,44.41-31.71,69-43.34,3.29-1.55,4.33-3.4,4.32-7Q74.82,150,75,65.92c0-3.58-1-5.41-4.34-7C46.16,47.54,24,32.33,1.67,16.22L13.47,1c91.6,73.73,183.16,73.22,274.72,0L300,16.27c-7.22,5.08-13.93,10.41-21.2,14.8-16,9.65-32.16,18.92-48.4,28.09-2.73,1.54-4,2.94-4,6.18q.14,84.63,0,169.26c0,3.57,1.43,5.08,4.39,6.47C255.36,252.69,277.5,268.25,300,284.44ZM191.59,228.11V71.86a210.86,210.86,0,0,1-81.69,0V228.13A266.7,266.7,0,0,1,191.59,228.11Z" transform="translate(-1.65 -1)"/>',
          location: { x: 300, y: -65 },
          word:
            '<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">\n    Gem\n  </text>',
          wordLocation: { x: 90, y: 40 },
          viewBox: "-50 60 600 600",
          textAnchor: "start",
          called: false,
        },
        Descendant: {
          sign: "Sagittarius",
          icon:
            '<path d="M104.72,213.24c-25.82,25.88-51,51.12-76.18,76.35C19.12,299,12.39,300.41,6.06,294.3-.48,288,.92,281,10.74,271.22q34.71-34.73,69.5-69.38c2.05-2,4.89-3.28,7.9-5.25L33.75,142.4c-1.13-1.12-2.34-2.18-3.39-3.38-5.22-5.86-5.18-13.64.05-18.58s12.83-4.68,18.58,1q24.67,24.44,49.1,49.13a75.82,75.82,0,0,1,5.15,6.27L252.79,27.29c-2-.15-4.2-.47-6.4-.47q-43.9,0-87.81.13c-8.58,0-14.16-5.16-14-12.84.2-7.37,5.75-12.23,13.83-12.26q60.67-.23,121.33-.49C295.36,1.3,299,5,299,20.61q-.15,60.68-.3,121.34c0,8.67-5.07,14.18-12.77,14.06s-12.51-5.87-12.51-14.47c0-31.38,0-62.75,0-92.88L124.74,197.3c10.81,10.77,23.24,23.15,35.65,35.53,5.28,5.26,10.59,10.49,15.8,15.81,7,7.18,7.71,14.66,2,20.26s-13.08,4.79-20.26-2.36C140.4,249.07,123,231.53,104.72,213.24Z" transform="translate(-2.05 -1.36)"/>',
          location: { x: 340, y: -150 },
          word:
            '<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">\n    Sag\n  </text>',
          wordLocation: { x: 150, y: -140 },
          viewBox: "-100 60 600 600",
          called: false,
        },
        Moon: {
          sign: "Pisces",
          icon:
            '<path d="M241.33.08q14,0,28,0c.36,0,1.17-.47,1,.56A289.28,289.28,0,0,0,246,30.84c-19.78,28.21-33.44,58.87-37.26,93.45-.33,2.94-.53,5.9-.8,9h60.64v21.35H208c0,.69,0,1.22,0,1.75a188.87,188.87,0,0,0,8.67,55.19,209.9,209.9,0,0,0,30.07,59.26,257.6,257.6,0,0,0,23.63,28.5c.18.9-.51.57-.88.57-4.1,0-8.2,0-12.3,0H239.57a14.72,14.72,0,0,0-.89-1.29,251,251,0,0,1-43.2-70.4c-9.58-23.34-15.81-47.45-16-72.87a3.48,3.48,0,0,0-.13-.69H120.7c0,.54-.08,1-.09,1.49A168.71,168.71,0,0,1,115.5,195c-9.3,36.93-26.3,70-50.36,99.41L60.63,300H29.3a276.05,276.05,0,0,0,23.92-28.83c14.23-19.87,25.21-41.35,31.87-64.94A190.32,190.32,0,0,0,92.16,156c0-.42,0-.84-.09-1.41H31.5V133.23H92.13a167.14,167.14,0,0,0-3.25-25C84.2,85.4,75.2,64.33,63.12,44.52A289.12,289.12,0,0,0,29.3.08H58.87c.27.34.52.7.82,1A250.4,250.4,0,0,1,86.56,35.6a218.18,218.18,0,0,1,33.83,96.13c.13,1.22.53,1.6,1.79,1.59q27.88-.06,55.78,0c.48,0,.95,0,1.49-.08.05-.31.08-.55.12-.78,1-6.32,1.71-12.67,2.9-19a218.83,218.83,0,0,1,35.2-84A261.25,261.25,0,0,1,241.33.08Z" transform="translate(-29.3 0)"/>',
          location: { x: 430, y: -190 },
          word:
            '<text transform="rotate(88.854 -14.881 32.32)" letter-spacing="25" font-size="252.05" font-family="WolpePegasus-Regular">\n    Pis\n  </text>',
          wordLocation: { x: 315, y: -250 },
          viewBox: "-100 60 600 600",
          textAnchor: "start",
          called: false,
        },
        _id: "34527",
      },
    },
  ]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { addToast } = useToasts();

  const { uuidv4 } = useContext(UtilitiesContext);
  const { BirthChart } = useContext(BirthChartContext);

  const createBirthChartURL = ({
    datetime,
    latitude,
    longitude,
    utcoffset,
  }) => {
    const dob = datetime.slice(0, 10).replaceAll("-", "");
    const tob = datetime.slice(11, 16).replace(":", "");
    const d = new Date(datetime);
    const timestamp = d.getTime();

    const params = new URLSearchParams();
    params.append("location", `${latitude},${longitude}`);
    params.append("timestamp", timestamp);
    params.append("key", TIME_API_KEY);

    console.log("params", params);

    const fetchURL = `http://localhost:8000/formatData?date=${dob}&time=${tob}&location1=${latitude}&location2=${longitude}&utc=${utcoffset}&action=`;
    // console.log("fetchURL", fetchURL);
    return fetchURL;
  };

  const fetchBirthChart = async (fetchURL, { firstName, lastName }) => {
    // console.log('loading', loading);
    // console.log('error', error);
    if (loading || loaded || error) {
      return;
    } else {
      setLoading(true);
    }
    try {
      const response = await fetch(fetchURL);
      if (response.status !== 200) {
        throw response;
      }
      let chartData = await response.json();
      chartData = JSON.parse(chartData);
      chartData.Ascendant = chartData.Asc;
      chartData.Descendant = BirthChart.descDict[chartData.Ascendant];
      delete chartData.Asc;
      chartData.ownerName = `${firstName} ${lastName}`;
      // console.log("chartdata", chartData);
      return chartData;
      // setLoading(false);
    } catch (err) {
      setError(err.message || err.statusText);
    } finally {
      setLoading(false);
      setLoaded("true");
    }
  };
  // async function getBirthChart(
  //   fetchURL = "",
  //   renderFn,
  //   { firstname, lastname },
  // ) {
  //   try {
  //     const response = await fetch(fetchURL); // because of weird python formatting
  //     //handle bad responses
  //     if (!response.ok) throw response;
  //     let chartData = await response.json();
  //     chartData = JSON.parse(chartData); // twice because stupid python
  //     // console.log("chartData", chartData);
  //     chartData.Ascendant = chartData.Asc;
  //     chartData.Descendant = BirthChart.descDict[chartData.Ascendant];
  //     delete chartData.Asc;

  //     chartData.ownerName = `${firstname} ${lastname}`;

  //     // console.log("chartData", chartData);
  //     const player = new Player({ chartData });
  //     renderFn(player);
  //     bingoGameController.addPlayer(player);
  //   } catch (err) {
  //     console.log(err);
  //     M.toast({
  //       html: `<h2>Error with Python server</h2><p>${err.message}</p>`,
  //       classes: ["toast", "error"],
  //     });
  //   }
  // }

  const addPlayer = async (formData) => {
    let newPlayer = {
      ...formData,
      _id: uuidv4(),
    };
    const fetchURL = createBirthChartURL(newPlayer);
    const fetchData = await fetchBirthChart(fetchURL, newPlayer);
    newPlayer.chart = new BirthChart(fetchData);
    // console.log("new player", newPlayer);
    console.log("JSON new player ", JSON.stringify(newPlayer));
    setPlayers([...players, newPlayer]);
    addToast(`Saved ${newPlayer.firstName} ${newPlayer.lastName}`, {
      appearance: "success",
    });
  };

  //TODO UPDATE PLAYER

  const deletePlayer = async (id) => {
    // Get index
    console.log("trying to delete player");
    const index = players.findIndex((player) => player._id === id);
    const deletedPlayer = players[index];

    if (index === -1) {
      addToast(`Error: Failed to delete player id: ${id}`, {
        appearance: "error",
      });
      return;
    }
    // recreate the players array without that color
    const updatedPlayers = [
      ...players.slice(0, index),
      ...players.slice(index + 1),
    ];
    setPlayers(updatedPlayers);
    addToast(`Deleted ${deletedPlayer.firstName} ${deletedPlayer.lastName}`, {
      appearance: "success",
    });
  };

  const deleteAllPlayers = () => {
    const players = [];
    setPlayers(players);
    addToast(`All players deleted`, {
      appearance: "success",
    });
  };

  // ADD PLAYER WITH API
  // const addPlayer = async (formData) => {
  //   try {
  //     const response = await fetch(API_ENDPOINT, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     if (response.status !== 201) {
  //       throw response;
  //     }
  //     const savedPlayer = await response.json();
  //     console.log("got data", savedPlayer);
  //     setPlayers([...players, savedPlayer]);
  //     addToast(`Saved ${savedPlayer.firstName} ${savedPlayer.lastName}`, {
  //       appearance: "success",
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     addToast(`Error ${err.message || err.statusText}`, {
  //       appearance: "error",
  //     });
  //   }
  // };

  return (
    <PlayersContext.Provider
      value={{
        addPlayer,
        deletePlayer,
        deleteAllPlayers,
        createBirthChartURL,
        fetchBirthChart,
        error: null,
        players,
      }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
};
