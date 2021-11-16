module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('products', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'product_id',
        },
        name: {
            type: STRING(50),
            allowNull: false,
            field: 'product_name',
        },
        
        description: {
            type: TEXT,
        },
        price: {
            type: DECIMAL(20, 2),
            allowNull: false,
        },

        stock: {
            type: INTEGER(11),
            allowNull: false,
            field: 'Quantity',
        },
        createdAt: {
            type: DATE,
            allowNull: false,
            defaultValue: new Date(),
            field: 'created_at'
        },
        updatedAt: {
            type: DATE,
            allowNull: false,
            defaultValue: new Date(),
            field: 'updated_at'
        },
    }, 
    {
        timestamps: false,
        tableName: 'product',        
    });

    Product.associate = function (models) {
        Product.belongsToMany(models.Category, {
                    through: models.ProductCategory,
                    foreignKey: 'productId',
                    otherKey: 'categoryId',
                });        
    };
    return Product;
};