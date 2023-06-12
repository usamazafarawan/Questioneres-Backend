import { Questions } from "./questions.model";

/**
 * fetch all questions from database and return.
 * @param req
 * @param res
 * @returns list of questions.
 */
export const getQuestions =  function (req: any, res: any, next: any) {
  try {
    return Questions.find().then((questionsList) => {
      if (questionsList) {
        return res.status(200).send(questionsList);
      }
    });
  } catch (err) {
    next(err);
  }
};

/**
 * adds questions in Questions Table.
 * @param req
 * @param res
 * @returns
 */
export const addQuestion =  function (req: any, res: any, next: any) {
  try {
    if (req?.body) {
      let question = req.body;
      console.log('questions',question)
      return Questions.create(question).then((question) => {
        return res.status(200).send(question);
      });
    }
  } catch (err) {
    next(err);
    console.log(err, "error");
  }
};

/**
 * updates questions in  Questions Table.
 * @param req
 * @param res
 * @returns
 */
export const updateQuestion =  function (req: any, res: any, next: any) {
  try {
    console.log(req.params.id, 'req.params.id')
    if (req.params && req.params.id) {
      return Questions.findByIdAndUpdate(req.params.id, req.body).then(
        (response) => {
          return res.status(200).send(response);
        }
      );
    } else {
      return res.status(404).send("question id is missing");
    }
  } catch (err) {
    next(err);
    console.log(err, "error-update");
  }
};

/**
 *
 * @param req deletes question from   Questions Table.
 * @param res
 * @returns
 */
export const deleteQuestion =  function (req: any, res: any, next: any) {
  try {
    if (req.params && req.params.id) {
      return Questions.findByIdAndDelete(req.params.id).then((response) => {
        console.log("response", response);
        return res.status(200).send(res.json('deletedSuccessfully'));
      });
    } else {
      return res.status(404).send("question id is missing");
    }
  } catch (err) {
    next(err);
    console.log(err, "error-delete");
  }
};

/**
 * fetches question by Id from Questions Table.
 * @param req deletes question from   Questions Table.
 * @param res
 * @returns
 */
export const getQuestionById =  function (req: any, res: any, next: any) {
  try {
    if (req.params && req.params._id) {
      return Questions.findById(req.params._id).then((result) => {
        return res.status(200).send(result);
      });
    }
  } catch (err) {
    next(err);

    console.log(err, "error-getId");
  }
};
