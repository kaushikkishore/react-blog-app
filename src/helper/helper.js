const helpers = {
    getDateString : function (unixTimestamp) {
        return new Date(unixTimestamp)
          .toISOString()
          .slice(0, 19)
          .replace("T", " ");
      },

    
    getCurrentDateString: function () {
    return new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
    }
}

export default helpers;