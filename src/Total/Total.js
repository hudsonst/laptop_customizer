


    const total = Object.keys(this.state.selected).reduce(
        (acc, curr) => acc + this.state.selected[curr].cost,
        0
      );
  