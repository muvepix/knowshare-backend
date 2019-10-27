import Sequelize, { Model } from 'sequelize';

class Rating extends Model {
  static init(sequelize) {
    super.init(
      {
        like: Sequelize.BOOLEAN,
        post_id: Sequelize.STRING,
        user_id: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Rating;
