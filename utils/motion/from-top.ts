export function fromTop (duration:number = 0.3) {
    return {
      from: { 
        top: '-20%',
        opacity: 0,
        transition: {
          type: 'easeInOut',
                  duration: duration,
        } 
      },
      to: { 
        top: 0,
        opacity: 1,
        transition: {
          type: 'easeInOut',
                  duration: duration,
        } 
      },
    }
  }