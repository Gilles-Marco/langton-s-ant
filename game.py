from numpy import zeros

class Game(object):
    def __init__(self, width, height):
        self.width = width
        self.height = height
        self.blackPixel = zeros((self.width, self.height), dtype=bool)

    def ajouterPixel(self, antX, antY):
        if(self.blackPixel[antX][antY]==False): 
            self.blackPixel[antX][antY] = True
        else:
            self.blackPixel[antX][antY] = False

    def returnColor(self, x, y):
        return self.blackPixel[x][y]
    
    def exportMap(self):
        return self.blackPixel.tobytes()

    def getSize(self):
        return "{},{}".format(self.width, self.height)