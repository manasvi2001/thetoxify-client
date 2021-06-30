import util from './../../../util/utility';

export default {
  async setUser(context, payload) {
    let response = await fetch(`https://thetoxify-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/users/${payload.userId}.json`);
    if(!response.ok) {

    }
    let user = await response.json();
    if (!user) {
      user = {
        ...payload,
        id: util.getUniqueUserId(),
      };
      response = await fetch(`https://thetoxify-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/users/${payload.userId}.json`, {
        method: "PUT",
        body: JSON.stringify(user),
      });
      if (!response.ok) {

      }
    }
    context.commit("saveUser", user);
  },
  logout(context) {
    context.commit("deleteUser");
  },
};