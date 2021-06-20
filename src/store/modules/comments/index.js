import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  namespaced: true,
  state() {
    return {
      blogs: [{
        id: 'b1',
        userId: 'u1',
        content: `You can also customize this shortcut using a preference setting if needed.\n
        Code Formatting While Saving the File:\n
        Visual Studio Code allows the user to customize the default settings.\n
        If you want to auto format your content while saving, add the below code snippet in the work space settings of Visual Studio Code.\n
        Menu File → Preferences → Workspace Settings`,
        likes: 0,
        dislikes: 0,
        commentId: 'c1',
        published: true,
        timestamp: 1624168593,
        tags: ['vscode', 'editor']
      }]
    }
  },
  mutations,
  actions,
  getters
}