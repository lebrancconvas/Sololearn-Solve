def guitar(num,set)
    newset = []
    sumnu = newset.sum
    for i in set
        newset.push(i)
        if sumnu > num
            newset.pop
        elsif sumnu == num
            return newset
        # elsif sumnu < num
        #     newset << i
        end
    return newset
    end
end

print guitar(24,[12,1,61,5,9,2])