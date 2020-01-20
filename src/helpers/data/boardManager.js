import apiKeys from './config'

const baseUrl = apiKeys.databaseURL;

const getBoardsByUid = (uid) => {
    return fetch(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('something went wrong' + response.statusText)
            }
        })
        .then((parsedResponse) => {
            console.log("parsed", parsedResponse)
            const allBoardsObject = parsedResponse;
            const boards = [];
            if (allBoardsObject != null) {
                Object.keys(allBoardsObject).forEach((boardId) => {
                    const newBoard = allBoardsObject[boardId];
                    newBoard.id = boardId;
                    boards.push(newBoard);
                });
            }
            console.log("boards", boards)
            return boards;
        })
}

export default { getBoardsByUid }