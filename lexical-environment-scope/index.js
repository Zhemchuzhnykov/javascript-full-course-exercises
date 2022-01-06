let mainMessage = 'Just learn it';

export const sendText = name => {
  return `${name}, ${mainMessage}! Your Gromcode`;
};

export const setText = text => {
  mainMessage  = text;
}

export const createMessenger = () => {

  let message = 'Just learn it';
  let sender = 'Gromcode';

  const setMessage = text => {
    message = text;
  }

  const setSender = whoSends => {
    sender = whoSends;
  }

  const sendMessage = name => {
    return `${name}, ${message}! Your ${sender}`;
  };

  return {
    sendMessage,
    setMessage,
    setSender,
  }
}

const messenger1 = createMessenger();
const messenger2 = createMessenger();